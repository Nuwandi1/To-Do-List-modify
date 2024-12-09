import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-xl border border-purple-100 bg-white/50 backdrop-blur-sm 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                 placeholder:text-gray-400 text-gray-700"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl
                 hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                 flex items-center gap-2 shadow-lg shadow-purple-500/20"
      >
        <PlusCircle size={20} />
        Add
      </button>
    </form>
  );
}