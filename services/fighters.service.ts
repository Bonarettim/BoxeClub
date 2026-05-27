import axios from 'axios';

export async function getFighters() {
  const response = await axios.get(
    'https://dummyjson.com/users'
  );

  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  return response.data.users;
}
