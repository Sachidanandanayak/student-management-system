let mockRecords = [
  { id: 1, full_name: 'Ava Carter', email: 'ava@example.com', department: 'Engineering', phone: '555-0100', created_at: '2023-10-01' },
  { id: 2, full_name: 'Liam Patel', email: 'liam@example.com', department: 'People Ops', phone: '555-0101', created_at: '2023-10-02' },
  { id: 3, full_name: 'Zoe Lee', email: 'zoe@example.com', department: 'Design', phone: '555-0102', created_at: '2023-10-05' },
];

export async function apiRequest(path, options = {}) {
  // Simulate network delay
  await new Promise(r => setTimeout(r, 400));
  
  if (path === '/api/login') {
    return { success: true, token: 'mock_token' };
  }
  if (path === '/api/records' && options.method === 'POST') {
    const newRecord = JSON.parse(options.body);
    newRecord.id = mockRecords.length + 1;
    newRecord.created_at = new Date().toISOString().slice(0, 10);
    mockRecords.push(newRecord);
    return newRecord;
  }
  if (path === '/api/records') {
    return [...mockRecords];
  }
  if (path.startsWith('/api/records/') && options.method === 'DELETE') {
    const id = parseInt(path.split('/').pop(), 10);
    mockRecords = mockRecords.filter(r => r.id !== id);
    return { success: true };
  }
  throw new Error('Not Found in Mock API');
}
