import axios from "axios";

export default axios.create({
    baseURL: "https://notes-api-backend-roan.vercel.app/api", // backend ka URL
});
