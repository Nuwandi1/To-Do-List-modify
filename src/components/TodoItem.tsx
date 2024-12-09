import React, { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  return (
    <div 
      className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm 
                 border border-purple-100 animate-[slideIn_0.2s_ease-in-out] hover:bg-white/80 
                 transition-all duration-200"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded-md border-purple-200 text-purple-600 
                 focus:ring-purple-500 transition-all duration-200"
      />
      
      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-3 py-1 border border-purple-100 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleEdit}
            className="p-1.5 text-green-600 hover:text-green-700 hover:bg-green-50 
                     rounded-lg transition-colors duration-200"
          >
            <Check size={20} />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 
                     rounded-lg transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 ${
              todo.completed 
                ? 'line-through text-gray-400' 
                : 'text-gray-700'
            } transition-all duration-200`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 text-gray-500 hover:text-purple-600 hover:bg-purple-50 
                     rounded-lg transition-colors duration-200"
          >
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 
                     rounded-lg transition-colors duration-200"
          >
            <Trash2 size={20} />
          </button>
        </>
      )}
    </div>
  );
}