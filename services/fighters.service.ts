import axios from 'axios';
import { Fighter } from '@/types/fighter';

type GetFightersResponse = {
  users: Fighter[];
};

export async function getFighters(): Promise<Fighter[]> {
  try {
    const response = await axios.get<GetFightersResponse>(
      'https://dummyjson.com/users/'
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    return response.data.users;
  } catch (error) {
    throw new Error('Não foi possível carregar os lutadores.');
  }
}