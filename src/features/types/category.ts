interface Category {
  id: number;
  name: string;
  nameEn: string;
  logo: string;
  description: string;
  code: string;
  isMain: boolean;
}

export interface CategoryResponse {
  entities: Category[];
  // succeeded: boolean;
  // message: string;  // Type of response from api
  // responseCode: string;
}

export default Category;
