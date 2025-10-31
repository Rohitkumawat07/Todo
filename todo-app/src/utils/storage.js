
const STORAGE_KEY = 'todos-app-data';

export const storage = {

  getTodos: () => {
    try {
      const todos = localStorage.getItem(STORAGE_KEY);
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  },


  saveTodos: (todos) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      return true;
    } catch (error) {
      console.error('Error saving todos:', error);
      return false;
    }
  },


  clearTodos: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing todos:', error);
      return false;
    }
  }
};