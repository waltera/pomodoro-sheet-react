import React from 'react';

const WorkLog = () => (
  <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Planejado
      <span className="badge badge-secondary badge-pill">10</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Realizado
      <span className="badge badge-success badge-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Cancelado
      <span className="badge badge-danger badge-pill">1</span>
    </li>
  </ul>
);

export default WorkLog;
