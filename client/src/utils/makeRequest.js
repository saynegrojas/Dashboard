import axios from 'axios';

const makeRequest = async (method, endRoute, queryParam = null, body = null) => {
  try {
    const baseURL = process.env.REACT_APP_SERVER_URL; // Replace with your actual base URL
    let url = `${baseURL}/${endRoute}`;

    if (queryParam) {
      url += `?${new URLSearchParams(queryParam).toString()}`;
    }

    const response = await axios({
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    });

    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};

export default makeRequest;
