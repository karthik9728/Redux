import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 text-white text-2xl flex justify-between space-x-6">
      <h1>Redux Blog</h1>
      <nav>
        <ul className="flex space-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
