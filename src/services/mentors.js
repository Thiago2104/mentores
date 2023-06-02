import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}/mentores`;

export const getMentorsService = async () => {
    const data = await axios.get(baseUrl);
    return data;
  };