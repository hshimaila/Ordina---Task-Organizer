import React, { useState } from 'react';

const CATEGORIES = ['Personal', 'Work', 'Shopping', 'Health', 'Learning', 'Other'];
const PRIORITIES = ['low', 'medium', 'high'];

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({
      text: text.trim(),
      category,
      priority,
      dueDate: dueDate || null,
    });

    // Reset form
    setText('');
    setDueDate('');
    setIsExpanded(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-main">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          onFocus={() => setIsExpanded(true)}
        />
        <button type="submit" className="add-btn" disabled={!text.trim()}>
          Add Task
        </button>
      </div>

      {isExpanded && (
        <div className="form-options">
          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <div className="priority-buttons">
              {PRIORITIES.map(p => (
                <button
                  key={p}
                  type="button"
                  className={`priority-btn ${p} ${priority === p ? 'active' : ''}`}
                  onClick={() => setPriority(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-date"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
