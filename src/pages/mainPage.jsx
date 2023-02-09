import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <span className="nav-link active" aria-current="page">
          <Link to="/feedback">Обратная связь</Link>
        </span>
      </li>
      <li className="nav-item">
        <span className="nav-link">
          <Link to="/order">Оформление заказа</Link>
        </span>
      </li>
    </ul>
  );
};

export default MainPage;
