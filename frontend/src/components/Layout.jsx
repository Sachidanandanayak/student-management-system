import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export function Layout() {
  return (
    <>
      <TopNav />
      <section className="screen" style={{ margin: 0 }}>
        <div className="shell">
          <Sidebar />
          <main className="main">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
}
