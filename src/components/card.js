import React from 'react';

export default function App() {
  return (
    <div className="card">
      <div className="bg-image hover-overlay ripple" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
        <img src='https://mdbootstrap.com/img/new/standard/nature/111.webp' alt='...' />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Button</a>
      </div>
    </div>
  );
}
