import * as httpClient from '@/lib/http-client';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '../types/todo';

export async function fetchTodos(): Promise<Todo[]> {
  try {
    const response = await httpClient.get('/api/todos');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw new Error('TODOの読み込みに失敗しました');
  }
}

export async function createTodo(todo: CreateTodoRequest): Promise<Todo> {
  try {
    const response = await httpClient.post('/api/todos', { todo });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error creating todo:', error);
    throw new Error('TODOの作成に失敗しました');
  }
}

export async function updateTodo(id: number, todo: UpdateTodoRequest): Promise<Todo> {
  try {
    const response = await httpClient.put(`/api/todos/${id}`, { todo });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error updating todo:', error);
    throw new Error('TODOの更新に失敗しました');
  }
}

export async function deleteTodo(id: number): Promise<void> {
  try {
    const response = await httpClient.del(`/api/todos/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw new Error('TODOの削除に失敗しました');
  }
}
