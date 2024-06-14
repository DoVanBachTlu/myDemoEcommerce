import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../sliceRedux";
import axios from "axios";
import { loginAdmin } from "../connectors /APIDefined";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

// Get a new token admin if not available
axios.interceptors.request.use(
  async (config) => {
    let token = await AsyncStorage.getItem("adminToken");
    if (!token) {
      token = await loginAdmin("admin", "admin123");
    }
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
