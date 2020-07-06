import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../../api";
import { AppThunk } from "../../store";

export interface Size {
  available: boolean;
  size: string;
  sku: string;
}

export interface Product {
  [key: string]: any;
}

export interface Result {
  name: string;
  url: string;
  id: string;
  price: number;
}

export interface PokeData {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface InitialState {
  loading: boolean;
  data: PokeData;
}

const initialState: InitialState = {
  loading: false,
  data: {
    count: 0,
    next: "",
    previous: "string",
    results: [],
  },
};

export const addRandomPrice = (element: any) => ({
  ...element,
  price: Math.floor(Math.random() * 100) + 20,
});

const getPokeIdFromUrl = (url: string) => url.split("/").splice(-2, 1)[0];

const addId = (element: Result) => ({
  ...element,
  id: getPokeIdFromUrl(element.url),
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<PokeData>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productsSlice.actions;

export const fetchProducts = (currentPage: number): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const catalog = await getProducts(currentPage);
    catalog.results = catalog.results.map(addRandomPrice).map(addId);
    dispatch(setProducts(catalog));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
