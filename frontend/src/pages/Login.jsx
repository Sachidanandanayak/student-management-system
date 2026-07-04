import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { apiRequest } from '../utils/api';
import { TiltCard } from '../components/TiltCard';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiRequest('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      login();
      navigate('/dashboard');
    } catch (err) {
      showToast('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="page-intro">
        <div>
          <p className="eyebrow">Cloud Admin Suite</p>
          <h1>Welcome back</h1>
          <p className="lede">Sign in to access the dashboard, list, forms, and profile pages.</p>
        </div>
      </header>

      <section className="screen" id="login">
        <div className="auth-wrapper">
          <TiltCard className="auth-card">
            <div className="auth-visual">
              <div className="logo">Northwind Cloud</div>
              <p className="auth-tagline">Secure access for modern teams.</p>
              <div className="abstract-shape"></div>
              <ul className="pill-list">
                <li>SSO ready</li>
                <li>MFA friendly</li>
                <li>Audit logs</li>
              </ul>
            </div>
            <div className="auth-form">
              <p className="eyebrow">Welcome back</p>
              <h3>Sign in to continue</h3>
              <form className="form vertical" onSubmit={handleSubmit}>
                <label className="field floating">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=" " required />
                  <span>Email address</span>
                  <small className="hint">Use your company email</small>
                </label>
                <label className="field floating">
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder=" " required />
                  <span>Password</span>
                </label>
                <div className="form-row space-between">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span>Keep me signed in</span>
                  </label>
                  <a className="link" href="#">Forgot password?</a>
                </div>
                <button type="submit" className="btn primary" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="footnote">By continuing you agree to our security policy.</p>
              </form>
            </div>
          </TiltCard>
        </div>
      </section>
    </>
  );
}
