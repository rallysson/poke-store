import { PokeData } from "./containers/Home/productsSlice";
import { Pokemon } from "./types";

const get = (url: string) => fetch(url);

const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function getProducts(offset: number): Promise<PokeData> {
  const res = await get(
    `${API_BASE_URL}/pokemon?limit=${1000}&offset=${offset}`
  );

  return res.json();
}

export async function getProduct(
  idPrroduct: number | string
): Promise<Pokemon> {
  const res = await get(`${API_BASE_URL}/pokemon/${idPrroduct}`);

  return res.json();
}
