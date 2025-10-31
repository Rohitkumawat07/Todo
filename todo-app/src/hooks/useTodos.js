import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';


export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    const loadedTodos = storage.getTodos();
    setTodos(loadedTodos);
  }, []);


  useEffect(() => {
    if (todos.length >= 0) {
      storage.saveTodos(todos);
    }
  }, [todos]);


  const addTodo = (text, priority = 'medium') => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };

    setTodos([newTodo, ...todos]);
  };


  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const editTodo = (id, newText) => {
    if (!newText.trim()) return;

    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };


  const updatePriority = (id, priority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };


  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };


  const clearAll = () => {
    setTodos([]);
  };


  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });


  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    updatePriority,
    clearCompleted,
    clearAll,
    stats
  };
};