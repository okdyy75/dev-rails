'use client';

import { useState, useEffect } from 'react';
import { Todo, CreateTodoRequest } from '../types/todo';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos';

export interface UseTodosReturn {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (todoData: CreateTodoRequest) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  removeTodo: (id: number) => Promise<void>;
  refreshTodos: () => Promise<void>;
}

export function useTodos(): UseTodosReturn {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('TODOの読み込みに失敗しました');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData: CreateTodoRequest) => {
    try {
      const newTodo = await createTodo(todoData);
      setTodos((prev) => [...prev, newTodo]);
      setError(null);
    } catch (err) {
      setError('TODOの追加に失敗しました');
      console.error('Error creating todo:', err);
      throw err;
    }
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const updatedTodo = await updateTodo(id, { completed: !todo.completed });
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
      setError(null);
    } catch (err) {
      setError('TODOの更新に失敗しました');
      console.error('Error updating todo:', err);
      throw err;
    }
  };

  const removeTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
      setError(null);
    } catch (err) {
      setError('TODOの削除に失敗しました');
      console.error('Error deleting todo:', err);
      throw err;
    }
  };

  const refreshTodos = async () => {
    setLoading(true);
    await loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    removeTodo,
    refreshTodos,
  };
}
