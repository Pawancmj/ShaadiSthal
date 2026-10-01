import ApiClient from "./client";

export const getVendorProfile = () => {
  return ApiClient.get("/vendor/profile");
};

export const updateVendorProfile = (data: {
  name?: string;
  phone?: string;
}) => {
  return ApiClient.put("/vendor/profile", data);
};

export const getVendorVenues = () => {
  return ApiClient.get("/vendor/venues");
};

export const getVendorBookings = () => {
  return ApiClient.get("/vendor/bookings");
};

export const getVendorDashboard = () => {
  return ApiClient.get("/vendor/dashboard");
};
