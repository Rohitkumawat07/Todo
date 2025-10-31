import React from 'react';
import TodoItem from './TodoItem';
import { Calendar, CheckCircle2, ListX } from 'lucide-react';

const TodoList = ({ todos, filter, onToggle, onDelete, onEdit, onUpdatePriority }) => {

  if (todos.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        {filter === 'completed' ? (
          <>
            <CheckCircle2 size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 text-lg font-medium">No completed tasks yet</p>
            <p className="text-gray-300 text-sm mt-2">Complete some tasks to see them here</p>
          </>
        ) : filter === 'active' ? (
          <>
            <ListX size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 text-lg font-medium">No active tasks</p>
            <p className="text-gray-300 text-sm mt-2">All caught up! 🎉</p>
          </>
        ) : (
          <>
            <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 text-lg font-medium">No tasks yet</p>
            <p className="text-gray-300 text-sm mt-2">Add your first task to get started!</p>
          </>
        )}
      </div>
    );
  }


  return (
    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 animate-fade-in">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdatePriority={onUpdatePriority}
        />
      ))}
    </div>
  );
};

export default TodoList;