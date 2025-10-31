import React from 'react';
import { Filter } from 'lucide-react';

const FilterButtons = ({ filter, setFilter, onClearCompleted, completedCount }) => {
  const filters = [
    { id: 'all', label: 'All Tasks' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-gray-200">

      <div className="flex items-center gap-2">
        <Filter size={18} className="text-gray-400" />
        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${filter === f.id
                  ? 'bg-gradient-to-r from-[#00BF00] to-[#00BF00] text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>


      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 rounded-lg font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all duration-300 hover:scale-105"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default FilterButtons;