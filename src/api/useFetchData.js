

'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (nameSource) =>   {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await axios.get(`https://mindx-mockup-server.vercel.app/api/resources/${nameSource}?apiKey=6957348a9dda81df11d0c527`);
        const json = await res.json();
        setData(json?.data?.data || []);
      }
      fetchApi();
    } catch (error) {
      setError(error);
    }
    
  },[nameSource]);

  return { data, error };
}

export default useFetchData;