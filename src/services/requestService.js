import axios from 'axios';

export async function getPackages(data) {
  const {
    url, text, from, size,
  } = data;
  let pagination = '';

  if (from) {
    pagination = `&from=${from}`;
  }

  try {
    const response = await axios.get(`${url}?text=${text}&size=${size}${pagination}`);
    return response?.data?.objects || [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

