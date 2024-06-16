import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  APIManagerByCustomToken,
  UrlAPIDefined,
} from "../connectors /APIDefined";

interface CartState {
  numberOfItemsInCart: number;
  cartItems: any[];
}

const initialState: CartState = {
  numberOfItemsInCart: 0,
  cartItems: [],
};

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async ({
    sku,
    quantity,
    idQuote,
  }: {
    sku: string;
    quantity: number;
    idQuote: string;
  }) => {
    try {
      const addProduct = await APIManagerByCustomToken.post(
        UrlAPIDefined.addProductToCart,
        {
          cartItem: {
            sku: sku,
            qty: quantity,
            quote_id: idQuote,
          },
        }
      );
      return addProduct?.data;
    } catch (error) {
      console.log("addProductToCart error", error);
      throw error;
    }
  }
);
export const getListItemsInCart = createAsyncThunk(
  "cart/getListItemsInCart",
  async () => {
    try {
      const listItems = await APIManagerByCustomToken.get(
        UrlAPIDefined.listItemsInCartByCustomer
      );
      console.log("listItems---", listItems?.data?.items);
      return listItems?.data?.items;
    } catch (error) {
      console.log("getListItemsInCart error", error);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart(state, action) {
      return state.filter((item) => item?.id !== action.payload);
    },
    updateCart(state, action) {
      const itemIndex = state.findIndex(
        (item) => item?.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state[itemIndex] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      addProductToCart.fulfilled,
      (state, action: PayloadAction<string>) => {
        console.log("action----addCart", action.payload, state);
        const isItemExist = state.cartItems.some(
          (item) => item?.item_id === action.payload?.item_id
        );
        if (!isItemExist) {
          state.numberOfItemsInCart += 1;
        }
      }
    );
    builder.addCase(addProductToCart.rejected, (state, action) => {});
    builder.addCase(
      getListItemsInCart.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        console.log("aaaaaaaaaaaa", action.payload);
        state.cartItems = action.payload || [];
        state.numberOfItemsInCart = action.payload?.length || 0;
      }
    );
  },
});

export const { removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
