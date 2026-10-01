import ApiClient from "./client";

export const createReview = (
  venueId: number | string,
  data: {
    rating: number;
    comment?: string;
  }
) => {
  return ApiClient.post(`/venues/${venueId}/reviews`, data);
};

export const getVenueReviews = (venueId: number | string) => {
  return ApiClient.get(`/venues/${venueId}/reviews`);
};

export const updateReview = (
  venueId: number | string,
  reviewId: number | string,
  data: {
    rating?: number;
    comment?: string;
  }
) => {
  return ApiClient.put(
    `/venues/${venueId}/reviews/${reviewId}`,
    data
  );
};

export const deleteReview = (
  venueId: number | string,
  reviewId: number | string
) => {
  return ApiClient.delete(
    `/venues/${venueId}/reviews/${reviewId}`
  );
};
