interface Category {
  id: number;
  logo: string;
  isMain: boolean;
  code: number;
  name: string;
  nameEn: string;
  description: string;
}

export interface CategoryResponse {
  entities: Category[];
}

export default Category;
