import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className="flex items-center gap-3 p-3 border rounded bg-white hover:bg-gray-50"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 text-blue-600 rounded mt-0.5 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
          ID：{todo.id}　作成：{new Date(todo.created_at).toLocaleString('ja-JP')}　更新：{new Date(todo.updated_at).toLocaleString('ja-JP')}
        </div>
        <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {todo.title}
        </h3>
        {todo.description && (
          <p className={`text-sm mt-1 ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
            {todo.description}
          </p>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="px-2 py-1 text-xs text-red-600 hover:text-red-800 hover:bg-red-50 rounded cursor-pointer"
      >
        削除
      </button>
    </div>
  );
}
