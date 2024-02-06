import axios from 'axios';

export default axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 5000, // Set a timeout value if needed
});



