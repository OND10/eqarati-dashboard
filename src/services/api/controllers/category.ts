import { CategoryResponse } from '@/features/types/category';
import apiEndpoints from '../common/api-end-points';
import { GetAllWithAuth } from '../common/api-methods';

export default class CategoryController {
  public static async GetAllCategories() {
    return await GetAllWithAuth<CategoryResponse>(apiEndpoints.category);
  }
}
