import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000, // Set a timeout value if needed
});



