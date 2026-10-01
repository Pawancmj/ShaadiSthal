import ApiClient from "./client";

export interface AmenityData {
  name: string;
}

export const addAmenity = (
  venueId: number | string,
  data: AmenityData
) => {
  return ApiClient.post(`/amenities/${venueId}/amenities`, data);
};

export const getVenueAmenities = (
  venueId: number | string
) => {
  return ApiClient.get(`/amenities/${venueId}/amenities`);
};

export const updateAmenity = (
  venueId: number | string,
  amenityId: number | string,
  data: AmenityData
) => {
  return ApiClient.put(
    `/amenities/${venueId}/amenities/${amenityId}`,
    data
  );
};

export const deleteAmenity = (
  venueId: number | string,
  amenityId: number | string
) => {
  return ApiClient.delete(
    `/amenities/${venueId}/amenities/${amenityId}`
  );
};
