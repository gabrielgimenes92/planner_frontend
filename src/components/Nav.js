import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <h1>NAV</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/planner">Planner</Link>
        </li>
        <li>
          <Link href="/tracker">Tracker</Link>
        </li>
        <li>
          <Link href="/journal">Journal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
