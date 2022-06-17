import axios from "axios";

const baseURL = "https://voucher-hunter.herokuapp.com/api"
// const baseURL = "http://localhost:8080/api";

const API = {
  async loadUser() {
    const response = await axios.get(`${baseURL}/auth`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async signup(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`${baseURL}/user`, userInfo, config);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async login(loginInfo) {
    const response = await axios.post(`${baseURL}/auth`, loginInfo);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async googleLogin(idToken) {
    const response = await axios.post(`${baseURL}/auth/google`, { idToken });

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async loadProduct({ page = 1, size, sortBy, order, search, gte, lte, userId }) {
    const response = await axios.get(
      `${baseURL}/product?page=${page}${size ? `&size=${size}` : ""}${
        sortBy ? `&sortBy=${sortBy}` : ""
      }${order ? `&order=${order}` : ""}${search ? `&search=${search}` : ""}${
        gte ? `&gte=${gte}` : ""
      }${lte ? `&size=${lte}` : ""}`,
      {id: userId}
    );

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async loadProductByUser({ page = 1, size, sortBy, order, search, gte, lte, userId }) {
    const response = await axios.get(
      `${baseURL}/product/user?page=${page}${size ? `&size=${size}` : ""}${
        sortBy ? `&sortBy=${sortBy}` : ""
      }${order ? `&order=${order}` : ""}${search ? `&search=${search}` : ""}${
        gte ? `&gte=${gte}` : ""
      }${lte ? `&size=${lte}` : ""}`
    );

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async getCart() {
    const response = await axios.get(`${baseURL}/cart`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async addToCart(info) {
    const response = await axios.post(`${baseURL}/cart`, info);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async deleteItem(id) {
    const response = await axios.delete(`${baseURL}/cart/${id}`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async updateItem({ id, quantity }) {
    const response = await axios.put(`${baseURL}/cart/${id}`, { quantity });

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async placeOrder(info) {
    const response = await axios.post(`${baseURL}/order`, info);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async getAddress() {
    const response = await axios.get(`${baseURL}/address`);
    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async addAddress(info) {
    const response = await axios.post(`${baseURL}/address`, info);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }
    return response.data;
  },
  async toggleHeart({productId, userId}) {
    const response = await axios.post(`${baseURL}/heart`, {productId, userId});

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  }
};

export default API;
