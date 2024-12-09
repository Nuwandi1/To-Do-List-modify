import React from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { CheckSquare } from 'lucide-react';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
  } = useTodos();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-8 space-y-8 animate-[fadeIn_0.3s_ease-in-out]">
          <div className="flex items-center gap-4 border-b border-purple-100 pb-6">
            <CheckSquare className="w-10 h-10 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Todo List
            </h1>
          </div>

          <TodoInput onAdd={addTodo} />
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

          <div className="space-y-4">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-8 bg-gray-50/50 rounded-lg">
                No tasks found. Add some tasks to get started!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onEdit={editTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;