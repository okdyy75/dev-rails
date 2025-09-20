'use client';

import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export default function TodoList() {
  const { todos, loading, error, addTodo, toggleTodo, removeTodo } = useTodos();

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">TODOアプリ</h1>
        <p className="text-sm text-gray-600">シンプルなタスク管理アプリケーション</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
          {error}
        </div>
      )}

      <AddTodoForm onAdd={addTodo} />

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          TODOリスト ({todos.length}件)
        </h2>

        {todos.length === 0 ? (
          <div className="text-center py-6 text-gray-500 text-sm">
            TODOがありません。上のフォームから追加してください。
          </div>
        ) : (
          <div className="space-y-1">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={removeTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
