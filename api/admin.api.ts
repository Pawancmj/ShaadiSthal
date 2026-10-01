import ApiClient from "./client";

export const getAdminProfile = () => {
  return ApiClient.get("/admin/profile");
};

export const getAdminDashboard = () => {
  return ApiClient.get("/admin/dashboard");
};

export const getAllUsers = () => {
  return ApiClient.get("/admin/users");
};

export const getAllVenues = () => {
  return ApiClient.get("/admin/venues");
};

export const updateUserRole = (
  userId: number | string,
  role: "USER" | "VENDOR" | "ADMIN"
) => {
  return ApiClient.patch(`/admin/users/${userId}/role`, {
    role,
  });
};

export const verifyVenue = (
  venueId: number | string,
  verified: boolean
) => {
  return ApiClient.patch(`/admin/venues/${venueId}/verify`, {
    verified,
  });
};

export const deleteUser = (
  userId: number | string
) => {
  return ApiClient.delete(`/admin/users/${userId}`);
};
