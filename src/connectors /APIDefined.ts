import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { loginSuccess, logout } from "../sliceRedux/customer";
import store from "../container/ConfigStore";
import { localStorageModule, localStorageName } from "../modules/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../navigation/router/ScreenName";
export const access_token = "2oe03d7lbunb3naq9ujrh1ohvvbabr0z";
export const apiKeyAdobe = "fdd5ce9554614707b97aa4184d9cf402";
export const baseUrl = "https://training-site-2.bssdev.cloud/rest/";
export const baseUriImage =
  "https://training-site-2.bssdev.cloud/pub/media/catalog/product";
export const UrlAPIDefined = {
  listProducts: "default/V1/products",
  createCustomer: "default/V1/customers",
  loginAdmin: "V1/tfa/provider/google/authenticate",
  loginCustomer: "default/V1/integration/customer/token",
};

export const APIManager = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  },
});

APIManager.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createCustomer = async (customerData: any) => {
  try {
    const response = await APIManager.post(UrlAPIDefined.createCustomer, {
      customer: {
        firstname: customerData.firstName,
        lastname: customerData.lastName,
        email: customerData.email,
        addresses: [],
      },
      password: customerData.password,
    });
    console.log("createCustomer", response?.data);
    return response.data;
  } catch (error) {
    console.error("createCustomer error:", error?.response.data);
    Alert.alert(error?.response.data?.message);
    throw error;
  }
};
export const loginAdmin = async (username: string, password: string) => {
  try {
    const response = await axios.post(baseUrl + UrlAPIDefined.loginAdmin, {
      username,
      password,
    });
    console.log("Login ", response.data);
    return response?.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
export const logoutCustomer = async () => {
  try {
    await AsyncStorage.removeItem(localStorageName.tokenCustomer);
    store.dispatch(logout());
  } catch (error) {
    console.error("Failed to logout", error);
  }
};
export const loginCustomer = async (username: string, password: string) => {
  try {
    const navigation = useNavigation();
    const response = await APIManager.post(UrlAPIDefined.loginCustomer, {
      username,
      password,
    });
    console.log("loginCustomer", response?.data);
    localStorageModule.setItem(localStorageName.tokenCustomer, response?.data);
    store.dispatch(loginSuccess(response.data));
    Alert.alert("login success");
    navigation.navigate(ScreenName.home);
    return response.data;
  } catch (error) {
    console.log("loginCustomer error", error);
    Alert.alert(error?.response.data?.message);
  }
};
const refreshAuthToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem(
      localStorageName.tokenCustomer
    );
    const response = await axios.post(`${baseUrl}default/V1/refresh`, {
      token: refreshToken,
    });
    const newToken = response.data.token;
    await AsyncStorage.setItem(localStorageName.tokenCustomer, newToken);
    store.dispatch(loginSuccess(newToken));
    return newToken;
  } catch (error) {
    console.error("Failed to refresh auth token", error);
    logoutCustomer();
    throw error;
  }
};
APIManager.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem(localStorageName.tokenCustomer);
  if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

APIManager.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAuthToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
