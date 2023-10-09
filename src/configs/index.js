// config.js
const config = {
  api_host_dev: import.meta.env.VITE_HOST_DEV,
  api_key: import.meta.env.VITE_API_KEY,
  api_image: import.meta.env.VITE_HOST_IMAGE_DEV,
};

export { config };
