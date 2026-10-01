import ApiClient from "./client";

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = (data: RegisterData) => {
  return ApiClient.post("/auth/register", data);
};

export const verifyOtp = (data: {
  email: string;
  otp: string;
}) => {
  return ApiClient.post("/auth/verify-otp", data);
};

export const loginUser = (data: LoginData) => {
  return ApiClient.post("/auth/login", data);
};

export const logoutUser = () => {
  return ApiClient.post("/auth/logout");
};
