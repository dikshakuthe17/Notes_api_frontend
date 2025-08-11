import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL // backend ka URL env se le raha hai
});
