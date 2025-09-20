'use client';

import { useTodoForm } from '../hooks/useTodoForm';
import { CreateTodoRequest } from '../types/todo';

interface AddTodoFormProps {
  onAdd: (todo: CreateTodoRequest) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const { title, description, setTitle, setDescription, reset } = useTodoForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      description: description.trim() || undefined,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-white border rounded shadow-sm">
      <h2 className="text-base font-semibold text-gray-900">新しいTODOを追加</h2>

      <div>
        <label htmlFor="title" className="block text-xs font-medium text-gray-700 mb-1">
          タイトル *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="TODOのタイトルを入力"
          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-xs font-medium text-gray-700 mb-1">
          説明（任意）
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="TODOの詳細説明"
          rows={2}
          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={!title.trim()}
        className="w-full bg-blue-600 text-white py-1.5 px-3 text-sm rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        追加
      </button>
    </form>
  );
}
