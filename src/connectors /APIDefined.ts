import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
import store from "../container/ConfigStore";
import { localStorageModule, localStorageName } from "../modules/AsyncStorage";
import { loginSuccess, logout } from "../sliceRedux/customer";
import { getListItemsInCart } from "../sliceRedux/cart";
export const access_token_admin = "2oe03d7lbunb3naq9ujrh1ohvvbabr0z";
export const apiKeyAdobe = "fdd5ce9554614707b97aa4184d9cf402";
export const baseUrl = "https://training-site-2.bssdev.cloud/rest/";
export const baseUriImage =
  "https://training-site-2.bssdev.cloud/pub/media/catalog/product";
export const UrlAPIDefined = {
  listProducts: "default/V1/products",
  createCustomer: "default/V1/customers",
  loginAdmin: "V1/tfa/provider/google/authenticate",
  loginCustomer: "default/V1/integration/customer/token",
  search: "default/V1/search",
  productInfoBySku: "default/V1/products/",
  attributesByProduct: "default/V1/products/attributes",
  addProductToCart: "default/V1/carts/mine/items",
  createNewCart: "default/V1/carts/mine",
  listItemsInCartByCustomer: "default/V1/carts/mine",
};
interface FilterSearch {
  field: string;
  value: string;
  condition_type: string;
}

interface FilterGroupSearch {
  filters: FilterSearch[];
}

interface SearchCriteria {
  filterGroups: FilterGroupSearch[];
}
export const APIManagerAdmin = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${access_token_admin}`,
    "Content-Type": "application/json",
  },
});
export const APIManagerByCustomToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

APIManagerByCustomToken.interceptors.request.use(
  async (config) => {
    try {
      const tokenCustomer = await AsyncStorage.getItem(
        localStorageName.tokenCustomer
      );
      if (tokenCustomer) {
        const realTokenCustomer = tokenCustomer.replace(/"/g, "");
        config.headers.Authorization = `Bearer ` + realTokenCustomer;
      }
      return config;
    } catch (error) {
      console.error("Error getting token from AsyncStorage", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const searchProduct = async (
  categoryGear: string,
  value: string,
  condition_type: string
) => {
  const searchCriteria: SearchCriteria = {
    filterGroups: [
      {
        filters: [
          {
            field: categoryGear,
            value: value,
            condition_type: condition_type,
          },
        ],
      },
    ],
  };
  try {
    const response = await APIManager.get(UrlAPIDefined.search, {
      params: {
        searchCriteria,
      },
    });
    console.log("search", response?.data);
  } catch (error) {
    console.log("search error", error);
  }
};
export const createCustomer = async (customerData: any) => {
  try {
    const response = await APIManagerAdmin.post(UrlAPIDefined.createCustomer, {
      customer: {
        firstname: customerData.firstName,
        lastname: customerData.lastName,
        email: customerData.email,
        addresses: [],
      },
      password: customerData.password,
    });
    console.log("createCustomer", response?.data);
    return response?.data;
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
    const response = await APIManagerAdmin.post(UrlAPIDefined.loginCustomer, {
      username,
      password,
    });
    console.log("loginCustomer", response?.data);
    localStorageModule.setItem(localStorageName.tokenCustomer, response?.data);
    store.dispatch(loginSuccess(response?.data));
    store.dispatch(getListItemsInCart());
    Alert.alert("login success");
    return response?.data;
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
APIManagerByCustomToken.interceptors.response.use(
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
APIManagerAdmin.interceptors.response.use(
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
