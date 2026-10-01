import ApiClient from "./client";

export const createBooking = (
  venueId: number | string,
  data: {
    eventDate: string;
    guests: number;
  }
) => {
  return ApiClient.post(`/bookings/${venueId}/bookings`, data);
};

export const getMyBookings = () => {
  return ApiClient.get("/bookings");
};

export const getVenueBookings = (venueId: number | string) => {
  return ApiClient.get(`/bookings/${venueId}/bookings`);
};

export const getBookingById = (id: number | string) => {
  return ApiClient.get(`/bookings/${id}`);
};

export const cancelBooking = (id: number | string) => {
  return ApiClient.patch(`/bookings/${id}/cancel`);
};
