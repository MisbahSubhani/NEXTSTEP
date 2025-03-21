const backendUrl = import.meta.env.VITE_SERVER_URL;

if (!backendUrl) {
  console.error('VITE_SERVER_URL is not defined. Please set it in your environment variables.');
}

export default backendUrl;