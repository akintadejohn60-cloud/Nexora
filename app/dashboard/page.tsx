"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./dashboard.css";

type Task = { id: number; title: string; category: string; done: boolean };

const starterTasks: Task[] = [
  { id: 1, title: "Plan my priorities for today", category: "Personal", done: true },
  { id: 2, title: "Spend 30 minutes learning", category: "Growth", done: false },
  { id: 3, title: "Make progress on my main goal", category: "Goals", done: false },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(starterTasks);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"All" | "Open" | "Done">("All");
  const completed = tasks.filter((task) => task.done).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const visibleTasks = useMemo(
    () => tasks.filter((task) => filter === "All" || (filter === "Done" ? task.done : !task.done)),
    [tasks, filter]
  );

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, category: "Personal", done: false }]);
    setNewTask("");
  }

  function toggleTask(id: number) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  }

  function deleteTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <main className="workspace">
      <aside className="sidebar">
        <Link className="workspace-brand" href="/"><span className="brand-mark">N</span>NEXORA</Link>
        <div className="side-label">WORKSPACE</div>
        <a className="side-link active" href="#overview">▦ <span>Overview</span></a>
        <a className="side-link" href="#tasks">✓ <span>My tasks</span></a>
        <a className="side-link" href="#goals">◎ <span>Goals</span></a>
        <div className="sidebar-bottom"><div className="avatar">N</div><div><strong>My workspace</strong><small>Your personal space</small></div></div>
      </aside>

      <section className="workspace-main" id="overview">
        <header className="workspace-header">
          <div><span className="workspace-kicker">YOUR PERSONAL SPACE</span><h1>Good day. Let's make it count.</h1><p>A little progress today can make a big difference tomorrow.</p></div>
          <Link href="/" className="back-home">← Back to home</Link>
        </header>

        <div className="stat-grid">
          <article className="stat-card"><span>YOUR TASKS</span><strong>{tasks.length.toString().padStart(2, "0")}</strong><small>Total tasks in your list</small></article>
          <article className="stat-card"><span>COMPLETED</span><strong>{completed.toString().padStart(2, "0")}</strong><small>Steps you've finished</small></article>
          <article className="stat-card"><span>DAILY PROGRESS</span><strong>{progress}%</strong><div className="mini-progress"><i style={{ width: progress + "%" }} /></div></article>
        </div>

        <div className="workspace-grid">
          <section className="panel task-panel" id="tasks">
            <div className="panel-heading"><div><span className="workspace-kicker">STAY ON TRACK</span><h2>Your tasks</h2></div><span className="count-pill">{tasks.length} total</span></div>
            <form className="add-task-form" onSubmit={addTask}><input aria-label="New task" placeholder="What do you need to get done?" value={newTask} onChange={(event) => setNewTask(event.target.value)} /><button type="submit">Add task <span>+</span></button></form>
            <div className="task-filters">{(["All", "Open", "Done"] as const).map((item) => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)} type="button">{item}</button>)}</div>
            <div className="workspace-task-list">
              {visibleTasks.length ? visibleTasks.map((task) => <div className={"workspace-task" + (task.done ? " is-done" : "")} key={task.id}><button className="task-check" type="button" aria-label={task.done ? "Mark task incomplete" : "Complete task"} onClick={() => toggleTask(task.id)}>{task.done ? "✓" : ""}</button><div className="workspace-task-copy"><strong>{task.title}</strong><small>{task.category}</small></div><button className="delete-task" type="button" aria-label="Delete task" onClick={() => deleteTask(task.id)}>×</button></div>) : <div className="empty-state">Nothing here yet. Add a task and get moving.</div>}
            </div>
          </section>

          <div className="right-column">
            <section className="panel focus-panel"><span className="workspace-kicker">A NOTE TO SELF</span><div className="focus-symbol">✦</div><h2>Focus on the next step.</h2><p>You don't have to do everything at once. Choose one meaningful thing and give it your attention.</p></section>
            <section className="panel goal-panel" id="goals"><span className="workspace-kicker">YOUR GROWTH</span><h2>Big goals start small.</h2><p>Build consistency by showing up for one small action every day.</p><div className="goal-line"><span>Daily consistency</span><strong>One day at a time</strong></div></section>
          </div>
        </div>
        <footer className="workspace-footer">NEXORA <span>Clarity in every step. ✦</span></footer>
      </section>
    </main>
  );
}
