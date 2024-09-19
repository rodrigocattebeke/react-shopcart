const API_BASE_URL = "https://fakestoreapi.com";

export const apiUrls = {
  products: `${API_BASE_URL}/products`,
  productDetails: (id) => `${API_BASE_URL}/products/${id}`,
  categories: `${API_BASE_URL}/products/categories`,
  categoryDetail: (category) => `${API_BASE_URL}/products/category/${category}`,
};
