import React from 'react';
import { useToast } from '../contexts/ToastContext';
import { TiltCard } from '../components/TiltCard';

export function Dashboard() {
  const { showToast } = useToast();

  return (
    <div className="view active">
      <header className="topbar">
        <div>
          <p className="eyebrow">Overview</p>
          <h3>Operational Pulse</h3>
        </div>
        <div className="top-actions">
          <button className="btn ghost" onClick={() => showToast('No new notifications')}>🔔</button>
          <div className="avatar">SA</div>
        </div>
      </header>

      <div className="kpi-grid">
        <TiltCard>
          <p className="eyebrow">Total Students</p>
          <h4>12,480</h4>
          <p className="trend up">+4.2% vs last month</p>
        </TiltCard>
        <TiltCard>
          <p className="eyebrow">Departments</p>
          <h4>34</h4>
          <p className="trend flat">No change</p>
        </TiltCard>
        <TiltCard>
          <p className="eyebrow">Active Users</p>
          <h4>1,204</h4>
          <p className="trend up">+2.1% week</p>
        </TiltCard>
        <TiltCard className="accent">
          <p className="eyebrow">Recent Additions</p>
          <h4>48</h4>
          <p className="trend up">+12 new today</p>
        </TiltCard>
      </div>

      <div className="content-grid">
        <TiltCard className="chart-card">
          <header className="card-head">
            <div>
              <p className="eyebrow">Engagement</p>
              <h5>Weekly activity</h5>
            </div>
            <button className="chip ghost" onClick={() => showToast('Export started')}>Export</button>
          </header>
          <div className="bar-chart">
            <div style={{ height: '72%' }}></div>
            <div style={{ height: '58%' }}></div>
            <div style={{ height: '80%' }}></div>
            <div style={{ height: '64%' }}></div>
            <div style={{ height: '92%' }}></div>
            <div style={{ height: '55%' }}></div>
            <div style={{ height: '70%' }}></div>
          </div>
        </TiltCard>

        <TiltCard className="list-card">
          <header className="card-head">
            <div>
              <p className="eyebrow">Recent additions</p>
              <h5>Latest records</h5>
            </div>
            <button className="chip" onClick={() => showToast('Synced')}>Sync</button>
          </header>
          <ul className="activity-list">
            <li>
              <div>
                <p className="title">Ava Carter</p>
                <p className="muted">Student · Engineering</p>
              </div>
              <span className="pill">+2 credits</span>
            </li>
            <li>
              <div>
                <p className="title">Liam Patel</p>
                <p className="muted">Employee · People Ops</p>
              </div>
              <span className="pill success">Promoted</span>
            </li>
            <li>
              <div>
                <p className="title">Zoe Lee</p>
                <p className="muted">Student · Design</p>
              </div>
              <span className="pill warn">Hold</span>
            </li>
          </ul>
        </TiltCard>
      </div>
    </div>
  );
}
