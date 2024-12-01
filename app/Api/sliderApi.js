import axios from 'axios';

// Create an axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
});

const GetSlideData = async () => {
  try {
    const response = await axiosInstance.get('/slider.json'); // Relative path
    return response.data;
  } catch (error) {
    console.error('Error fetching slider data:', error.message);
    throw error;
  }
};

export default GetSlideData;
