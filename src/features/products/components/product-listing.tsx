import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';
import { getCategories } from '@/constants/mock-api'; // Or wherever you defined the function
import Category from '@/features/types/category';

type ProductListingPage = {};

export default async function ProductListingPage({}: ProductListingPage) {
  // ... your existing code

  try {
    const products: Category[] = await getCategories();

    if (products.length > 0) {
      return (
        <ProductTable
          data={products}
          totalItems={products.length} // It's better to use the actual count
          columns={columns}
        />
      );
    }
  } catch (error) {
    console.error('Failed to load products:', error);
    // You could return an error message or an empty state here
    return <div>Failed to load products. Please try again later.</div>;
  }
}
