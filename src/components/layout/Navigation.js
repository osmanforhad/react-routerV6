import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;
