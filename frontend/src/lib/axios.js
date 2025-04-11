export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5002/api"
      : "https://chat-app-2ymk.onrender.com/api",
  withCredentials: true,
});

