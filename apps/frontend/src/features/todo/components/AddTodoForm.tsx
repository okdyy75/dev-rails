'use client';

import { useTodoForm } from '../hooks/useTodoForm';
import { CreateTodoRequest } from '../types/todo';

interface AddTodoFormProps {
  onAdd: (todo: CreateTodoRequest) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const {
    title,
    description,
    tagsInput,
    setTitle,
    setDescription,
    setTagsInput,
    reset,
  } = useTodoForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    onAdd({
      title: title.trim(),
      description: description.trim() || undefined,
      tags: tags.length ? tags : undefined,
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

      <div>
        <label htmlFor="tags" className="block text-xs font-medium text-gray-700 mb-1">
          タグ（カンマ区切り・任意）
        </label>
        <input
          type="text"
          id="tags"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="例: 家事, 仕事"
          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <p className="text-[11px] text-gray-500 mt-1">カンマ区切りで複数タグを入力できます</p>
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
