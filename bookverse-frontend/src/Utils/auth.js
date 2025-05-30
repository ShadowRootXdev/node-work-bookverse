import { api } from './axios';
import { toast } from 'react-toastify';

export const logoutUser = async (navigate) => {
  try {
    await api.get('/logout', { withCredentials: true });
    localStorage.removeItem('user'); // or remove token/session info
    toast.success('Logged out successfully');
    navigate('/login');
  } catch (err) {
    console.error('Logout failed:', err);
  }
};
