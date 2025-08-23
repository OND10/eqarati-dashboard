'use client';
import { Alert } from '@/components/ui/alert';
import { CategoryController } from '@/services/controllers/category';
import { useQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { FC } from 'react';
import { CategoryTable } from './list-categories-table';
import { categorycolumns } from './list-categories-columns';

interface ListCategoriesContainerProps {
  test: boolean;
}

export const ListCategoriesContainer: FC<ListCategoriesContainerProps> = ({
  test
}) => {
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryController.getAll(),
    enabled: test,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5
  });

  if (categories.isLoading) return <Loader>Loading...</Loader>;
  if (categories.isError) return <Alert>خطاء في عرض التصنيفات</Alert>;

  if (categories.isSuccess && categories.data?.entities) {
    return (
      <CategoryTable
        data={categories.data.entities}
        totalItems={categories.data.entities.length}
        columns={categorycolumns}
      />
    );
  }

  return null;
};
