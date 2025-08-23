import { CategoryResponse } from '@/features/types/category';
import apiEndpoints from '../api/common/api-end-points';
import { GetAllWithAuth } from '../api/common/api-methods';

export class CategoryController {
  public static async getAll() {
    return await GetAllWithAuth<CategoryResponse>(apiEndpoints.categories);
  }
}
