'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Text } from 'lucide-react';
import Image from 'next/image';
import { CategoryCellAction } from './list-categories-cell-action';
import Category from '@/features/types/category';
import {
  IconAccessPoint,
  IconRadioactive,
  IconRadioactiveOff
} from '@tabler/icons-react';

export const categorycolumns: ColumnDef<Category>[] = [
  {
    accessorKey: 'logo',
    header: 'IMAGE',
    cell: ({ row }) => {
      return (
        <div className='relative aspect-square'>
          <Image
            src={row.getValue('logo')}
            alt={row.getValue('name')}
            fill
            className='rounded-lg'
          />
        </div>
      );
    }
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }: { column: Column<Category, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<Category['name']>()}</div>,
    meta: {
      label: 'Name',
      placeholder: 'Search categories...',
      variant: 'text',
      icon: Text
    },
    enableColumnFilter: true
  },
  {
    id: 'nameEn',
    accessorKey: 'nameEn',
    header: ({ column }: { column: Column<Category, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<Category['nameEn']>()}</div>,
    meta: {
      label: 'NameEn',
      placeholder: 'Search categories...',
      variant: 'text',
      icon: Text
    },
    enableColumnFilter: true
  },
  {
    accessorKey: 'code',
    header: 'CODE'
  },
  {
    id: 'isMain',
    accessorKey: 'isMain',
    cell: ({ cell }) => {
      const status = cell.getValue<Category['isMain']>();

      if (status) {
        return <IconRadioactive />;
      }
      return <IconRadioactiveOff />;
    },
    header: 'ISMAIN'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },

  {
    id: 'actions',
    cell: ({ row }) => <CategoryCellAction data={row.original} />
  }
];
