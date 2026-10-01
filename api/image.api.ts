import ApiClient from "./client";

export const getVenueImages = (
  venueId: number | string
) => {
  return ApiClient.get(`/venues/${venueId}/images`);
};

export const uploadVenueImage = (
  venueId: number | string,
  file: File
) => {
  const formData = new FormData();

  formData.append("image", file);

  return ApiClient.postForm(
    `/venues/${venueId}/images`,
    formData
  );
};

export const deleteVenueImage = (
  venueId: number | string,
  imageId: number | string
) => {
  return ApiClient.delete(
    `/venues/${venueId}/images/${imageId}`
  );
};

export const setPrimaryImage = (
  venueId: number | string,
  imageId: number | string
) => {
  return ApiClient.patch(
    `/venues/${venueId}/images/${imageId}/primary`
  );
};
