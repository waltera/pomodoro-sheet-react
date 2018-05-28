import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <Link to="/">Company name</Link>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link to="/tasks">Tasks</Link>
      <a className="p-2 text-dark" href="#">Pomodoros</a>
      <a className="p-2 text-dark" href="#">Configurações</a>
    </nav>
    <a className="btn btn-outline-primary" href="#">Sign up</a>
  </div>
);

export default Head;
