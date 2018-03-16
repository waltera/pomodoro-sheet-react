import React from 'react';

const Timer = () => (
  <div className="container">
    <div className="card-deck mb-3 text-center">
      <div className="card mb-4 box-shadow">
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    </div>
  </div>
);

export default Timer;
