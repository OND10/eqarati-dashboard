// src/constants/mock-api.ts or similar
import CategoryController from '@/services/api/controllers/category';
import Category from '@/features/types/category';

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await CategoryController.GetAllCategories();
    // Assuming GetAllCategories returns an object with an 'entities' array
    return response.entities;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
