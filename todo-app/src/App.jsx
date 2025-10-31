import React from 'react';
import { useTodos } from './hooks/useTodos';
import Stats from './components/Stats';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import { Sparkles } from 'lucide-react';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    updatePriority,
    clearCompleted,
    stats
  } = useTodos();

  return (
    <div className="min-h-screen bg-[#011e3a] p-4 sm:p-8 text-[#39FF14]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles size={36} className="text-[#39FF14]" />
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#39FF14]">
              My Tasks
            </h1>
            <Sparkles size={36} className="text-[#39FF14]" />
          </div>
          <p className="text-[#39FF14] text-lg sm:text-xl font-medium">
            Stay organized, stay glowing ⚡
          </p>
        </div>


        <Stats stats={stats} />


        <div className="bg-[#01182f] rounded-2xl p-6 sm:p-8 border border-[#39FF14]">

          <TodoForm onAdd={addTodo} />


          <FilterButtons
            filter={filter}
            setFilter={setFilter}
            onClearCompleted={clearCompleted}
            completedCount={stats.completed}
          />


          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onUpdatePriority={updatePriority}
          />
        </div>


        <div className="text-center mt-8 text-[#39FF14] text-sm">
          <p>Made with 💚 using React + Vite + Tailwind CSS</p>
          <p className="mt-2">© 2025 Clean Dark Todo App</p>
        </div>
      </div>
    </div>
  );
}

export default App;
