import React, { useState, useMemo, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import API from '../api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import SkeletonLoader from './SkeletonLoader';

function TodoApp() {
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 🔹 Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await API.get('/tasks/');

      const formatted = res.data.map(task => ({
        ...task,
        dueDate: task.due_date,
      }));

      setTodos(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Add task
  const addTodo = async (todoData) => {
    try {
      await API.post('/tasks/create/', {
        text: todoData.text,
        category: todoData.category,
        priority: todoData.priority,
        due_date: todoData.dueDate
      });

      fetchTasks(); // ✅ sync with backend
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Toggle complete
  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id);

    try {
      await API.put(`/tasks/${id}/`, {
        completed: !todo.completed,
      });

      fetchTasks(); // ✅ sync
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Delete task
  const deleteTodo = async (id) => {
    try {
      await API.delete(`/tasks/${id}/delete/`);
      fetchTasks(); 
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Edit task
  const editTodo = async (id, updates) => {
    try {
      await API.put(`/tasks/update/${id}/`, {
        ...updates,
        due_date: updates.dueDate || null,
      });

      fetchTasks(); // ✅ sync
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Clear completed
  const clearCompleted = async () => {
    const completedTasks = todos.filter(t => t.completed);

    try {
      await Promise.all(
        completedTasks.map(t =>
          API.delete(`/tasks/${t.id}/`)
        )
      );

      fetchTasks(); // ✅ sync
    } catch (err) {
      console.error('Error clearing tasks:', err);
    }
  };

  // 🔹 Categories
  const categories = useMemo(() => {
    const cats = new Set(todos.map(todo => todo.category));
    return ['all', ...cats];
  }, [todos]);

  // 🔹 Filtering
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'active' && todo.completed) return false;
      if (filter === 'completed' && !todo.completed) return false;

      if (categoryFilter !== 'all' && todo.category !== categoryFilter) return false;
      if (priorityFilter !== 'all' && todo.priority !== priorityFilter) return false;

      if (
        searchTerm &&
        !(todo.text || '').toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [todos, filter, categoryFilter, priorityFilter, searchTerm]);

  // 🔹 Stats
  const stats = useMemo(() => ({
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
  }), [todos]);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: isDarkMode ? '#fff' : '#5551a0',
          }}
        >
          <h1> Welcome! </h1>
        </header>

        <TodoForm onAdd={addTodo} />

        <div className="stats">
          <span className="stat">
            <strong>{stats.total}</strong> total
          </span>
          <span className="stat">
            <strong>{stats.active}</strong> active
          </span>
          <span className="stat">
            <strong>{stats.completed}</strong> completed
          </span>
        </div>

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          onClearCompleted={clearCompleted}
          hasCompleted={stats.completed > 0}
        />

        {loading ? (
          <SkeletonLoader />
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        )}

        {filteredTodos.length === 0 && !loading && (
          <div className="empty-state">
            {todos.length === 0 ? (
              <>
                <span className="empty-icon">📝</span>
                <p>No tasks yet. Add one above!</p>
              </>
            ) : (
              <>
                <span className="empty-icon">🔍</span>
                <p>No tasks match your filters.</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;