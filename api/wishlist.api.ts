import ApiClient from "./client";

export const addToWishlist = (venueId: number | string) => {
  return ApiClient.post(`/wishlists/${venueId}/wishlist`);
};

export const getWishlist = () => {
  return ApiClient.get("/wishlists");
};

export const getWishlistItem = (venueId: number | string) => {
  return ApiClient.get(`/wishlists/${venueId}/wishlist`);
};

export const removeFromWishlist = (venueId: number | string) => {
  return ApiClient.delete(`/wishlists/${venueId}/wishlist`);
};
