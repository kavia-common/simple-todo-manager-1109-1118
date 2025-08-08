import React, { useState } from "react";
import styles from "./AddTodo.module.css";

/**
 * PUBLIC_INTERFACE
 * AddTodo Component - "Add Todo" screen based on Figma design.
 * Allows users to enter a todo title and detail, with submit handler and UI
 * matching the provided design. Handles accessibility and responsiveness.
 */
function AddTodo() {
  // State for form fields
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required!");
      return;
    }
    // TODO: Replace alert with global state/backend call
    alert(`Todo added:\nTitle: ${title}\nDetail: ${detail}`);
    setTitle("");
    setDetail("");
    setError("");
  }

  // PUBLIC_INTERFACE
  function handleBackClick() {
    // Implement navigation logic here (e.g., history.back() or React Router)
    window.history.back();
  }

  return (
    <main className={styles.addTodoScreen}>
      {/* Status Bar Simulation (decorative) */}
      <div className={styles.statusBar} aria-hidden="true">
        <div className={styles.statusBarNotches}></div>
        <div className={styles.statusBarIcons}>
          <span className={styles.statusIcon} />
          <span className={styles.statusIcon} />
          <span className={styles.statusIcon} />
        </div>
        <span className={styles.statusBarTime}>9:41</span>
      </div>
      {/* App Bar */}
      <header className={styles.appBar}>
        <button
          className={styles.backBtn}
          aria-label="Back"
          type="button"
          onClick={handleBackClick}
        >
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true" focusable="false">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className={styles.appBarTitle}>Add Task</h1>
      </header>
      {/* Form Fields */}
      <form
        className={styles.todoForm}
        autoComplete="off"
        onSubmit={handleSubmit}
        aria-label="Add new todo"
      >
        <div className={styles.fieldGroup}>
          <label htmlFor="todo-title" className={styles.fieldLabel}>
            Title
          </label>
          <input
            id="todo-title"
            name="todo-title"
            className={styles.fieldInput}
            type="text"
            placeholder="Enter title"
            required
            maxLength={50}
            value={title}
            onChange={e => setTitle(e.target.value)}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "title-error" : undefined}
          />
          <div className={styles.fieldUnderline}></div>
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="todo-detail" className={styles.fieldLabel}>
            Detail
          </label>
          <input
            id="todo-detail"
            name="todo-detail"
            className={styles.fieldInput}
            type="text"
            placeholder="Enter details"
            maxLength={120}
            value={detail}
            onChange={e => setDetail(e.target.value)}
          />
          <div className={styles.fieldUnderline}></div>
        </div>
        {error && (
          <div
            id="title-error"
            className={styles.formError}
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
        <button className={`${styles.addBtn} ${styles.uShadowMd}`} type="submit">
          ADD
        </button>
      </form>
    </main>
  );
}

export default AddTodo;
