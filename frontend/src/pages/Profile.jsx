import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useToast } from '../contexts/ToastContext';
import { TiltCard } from '../components/TiltCard';

export function Profile() {
  const { logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    showToast('Password updated successfully');
  };

  return (
    <div className="form-shell profile">
      <div className="profile-summary" style={{ marginBottom: '32px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div className="avatar xl" style={{ width: '80px', height: '80px', fontSize: '32px' }}>SA</div>
        <div>
          <h4>Sachidananda Nayak</h4>
          <p className="muted">Admin · Platform Operations</p>
          <span className="pill">Last active 5m ago</span>
        </div>
      </div>

      <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <TiltCard className="soft">
          <header className="card-head">
            <div>
              <p className="eyebrow">Security</p>
              <h5>Change password</h5>
            </div>
          </header>
          <form className="form vertical" onSubmit={handlePasswordUpdate}>
            <label className="field required">
              <span>Current password</span>
              <input type="password" required />
            </label>
            <label className="field required">
              <span>New password</span>
              <input type="password" required />
            </label>
            <label className="field required">
              <span>Confirm password</span>
              <input type="password" required />
            </label>
            <button type="submit" className="btn primary">Update password</button>
          </form>
        </TiltCard>

        <TiltCard className="soft">
          <header className="card-head">
            <div>
              <p className="eyebrow">Preferences</p>
              <h5>Theme and session</h5>
            </div>
          </header>
          <div className="form vertical">
            <label className="field switch">
              <span>Dark mode</span>
              <input type="checkbox" checked={isDark} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
            <label className="field switch">
              <span>Remember device</span>
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
            <button className="btn danger" onClick={logout}>Logout</button>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
