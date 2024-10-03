import axios from "axios";
import toast from "react-hot-toast"; // Assuming you're using toast for notifications

export const uploadVoterImage = async (file) => {
    try {
        // Check if file exists
        if (!file) {
            throw new Error("No file provided");
        }

        const formData = new FormData();
        formData.append("file", file);

        // Get token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please authenticate first.");
        }

        // Set up the request headers
        const config = {
            headers: {
                "x-access-token": token,
                "Content-Type": "multipart/form-data", // Ensure the correct content type for file uploads
            },
        };

        // Make the POST request to upload the image
        const res = await axios.post("http://localhost:3000/api/postVoterImage", formData, config);

        // Handle response
        if (res.status === 200) {
            toast.success("Voter image uploaded successfully!");
            return res.data; // Return the response data for further use
        } else {
            throw new Error("Failed to upload voter image");
        }

    } catch (error) {
        console.error(error);
        toast.error(error.message || "Something went wrong during the upload.");
        throw error; // Re-throw the error for further error handling
    }
};
