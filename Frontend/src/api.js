// api.js

const backendUrl = import.meta.env.VITE_SERVER_URL 
  ? `http://${import.meta.env.VITE_SERVER_URL}`
  : 'http://localhost:3001';  

export default backendUrl;
