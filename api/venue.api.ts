import ApiClient from "./client";

export const createVenue = (data: unknown) => {
  return ApiClient.post("/venues", data);
};

export const getVenues = (params?: Record<string, string | number | boolean>) => {
  const query = params
    ? `?${new URLSearchParams(
        Object.entries(params).reduce(
          (acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          },
          {} as Record<string, string>
        )
      ).toString()}`
    : "";

  return ApiClient.get(`/venues${query}`);
};

export const getVenueById = (id: number | string) => {
  return ApiClient.get(`/venues/${id}`);
};

export const updateVenue = (id: number | string, data: unknown) => {
  return ApiClient.put(`/venues/${id}`, data);
};

export const deleteVenue = (id: number | string) => {
  return ApiClient.delete(`/venues/${id}`);
};
