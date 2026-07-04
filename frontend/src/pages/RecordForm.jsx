import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import { apiRequest } from '../utils/api';
import { TiltCard } from '../components/TiltCard';
import { useNavigate } from 'react-router-dom';

export function RecordForm() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '', department: 'Engineering', year_role: '', notes: ''
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await apiRequest('/api/records', { method: 'POST', body: JSON.stringify(formData) });
      showToast('Record created successfully!');
      navigate('/list');
    } catch (err) {
      showToast('Failed to create record');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <TiltCard className="form-shell">
      <header className="card-head">
        <div>
          <p className="eyebrow">Create record</p>
          <h5>Student / Employee</h5>
        </div>
        <span className="pill success">Autosave on</span>
      </header>
      <form className="form two-col" onSubmit={handleSubmit}>
        <label className="field required">
          <span>Full name</span>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Enter full name" required />
        </label>
        <label className="field required">
          <span>Email</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" required />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +1 202 555 0111" />
        </label>
        <label className="field required">
          <span>Department</span>
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option>Engineering</option>
            <option>Design</option>
            <option>People Ops</option>
            <option>Finance</option>
          </select>
        </label>
        <label className="field">
          <span>Year / Role</span>
          <input type="text" name="year_role" value={formData.year_role} onChange={handleChange} placeholder="Year 3 / Manager" />
        </label>
        <label className="field">
          <span>Notes</span>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Additional context"></textarea>
        </label>
        <div className="form-row actions" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
          <button type="button" className="btn ghost" onClick={() => navigate('/list')}>Cancel</button>
          <div style={{ flex: 1 }}></div>
          <button type="submit" className="btn primary" disabled={saving}>
            {saving ? 'Saving...' : 'Submit'}
          </button>
        </div>
      </form>
    </TiltCard>
  );
}
