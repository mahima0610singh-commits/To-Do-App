import { useContext } from 'react';
import taskcontext from '../context/notes/TaskContext.js';

export default function Navbar({ onAdd }) {
  const { addTask } = useContext(taskcontext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">

        <a className="navbar-brand">To-Do List</a>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="home/">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              All
            </a>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Completed Task</a></li>
              <li><a className="dropdown-item">Pending Task</a></li>
            </ul>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex mx-auto" style={{ width: "500px" }}>
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success">Search</button>
        </form>

        {/* ADD BUTTON */}
        <div className="d-flex ms-3">
          <button className="btn btn-outline-primary" onClick={addTask}>
            ADD
          </button>
        </div>

      </div>
    </nav>
  );
}