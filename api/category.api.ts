import ApiClient from "./client";

export interface CategoryData {
  name: string;
}

export const createCategory = (data: CategoryData) => {
  return ApiClient.post("/categories", data);
};

export const getCategories = () => {
  return ApiClient.get("/categories");
};

export const getCategoryById = (id: number | string) => {
  return ApiClient.get(`/categories/${id}`);
};

export const updateCategory = (
  id: number | string,
  data: CategoryData
) => {
  return ApiClient.put(`/categories/${id}`, data);
};

export const deleteCategory = (id: number | string) => {
  return ApiClient.delete(`/categories/${id}`);
};
