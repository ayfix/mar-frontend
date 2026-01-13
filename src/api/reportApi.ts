import axios from 'axios';

// Configure your base URL (adjust if your backend is on a different port)
const API = axios.create({
  baseURL: 'https://mar-backend-production-adf8.up.railway.app/api', 
});

// Add a request interceptor to include the auth token
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const fetchDashboardReports = async () => {
  const { data } = await API.get('/reports/dashboard');
  return data;
};