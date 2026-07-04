import React, { useState, useEffect } from 'react';
import { useToast } from '../contexts/ToastContext';
import { apiRequest } from '../utils/api';
import { TiltCard } from '../components/TiltCard';

export function RecordsList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, name: '' });
  const { showToast } = useToast();

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    setLoading(true);
    try {
      const data = await apiRequest('/api/records');
      setRecords(data);
    } catch (err) {
      showToast('Failed to load records');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await apiRequest(`/api/records/${deleteModal.id}`, { method: 'DELETE' });
      showToast(`${deleteModal.name} deleted`);
      setDeleteModal({ show: false, id: null, name: '' });
      loadRecords();
    } catch (err) {
      showToast('Failed to delete record');
    }
  };

  return (
    <>
      <header className="topbar compact">
        <div className="top-actions">
          <input className="input" type="search" placeholder="Search Employee" />
          <select className="input">
            <option>Active</option>
            <option>On Leave</option>
            <option>Inactive</option>
          </select>
        </div>
      </header>

      <TiltCard className="table-card">
        <div className="table-meta">
          <span className="pill">Company employees</span>
          <button className="chip ghost" onClick={loadRecords}>Refresh</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="5" style={{textAlign: 'center'}}>Loading...</td></tr>
              ) : records.map(rec => (
                <tr key={rec.id}>
                  <td>{rec.id}</td>
                  <td className="name-cell">
                    <div>
                      <span className="link strong">{rec.full_name}</span>
                      <p className="muted">{rec.email}</p>
                    </div>
                  </td>
                  <td>{rec.department}</td>
                  <td>
                    <div className="contact">
                      <strong>{rec.phone}</strong>
                      <p className="muted">{rec.email}</p>
                    </div>
                  </td>
                  <td className="actions">
                    <button className="chip ghost" onClick={() => setDeleteModal({ show: true, id: rec.id, name: rec.full_name })}>⋮ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TiltCard>

      <div className={`modal ${deleteModal.show ? 'active' : ''}`} aria-hidden={!deleteModal.show}>
        <div className="modal-content card">
          <p className="eyebrow">Confirm delete</p>
          <h4>Delete {deleteModal.name}?</h4>
          <p className="muted">This action cannot be undone. The record will be removed from all reports.</p>
          <div className="modal-actions">
            <button className="btn ghost" onClick={() => setDeleteModal({ show: false, id: null, name: '' })}>Cancel</button>
            <button className="btn danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
