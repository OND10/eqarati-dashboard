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

const prePath = 'https://instadar14-001-site1.stempurl.com';
export const categorycolumns: ColumnDef<Category>[] = [
  {
    accessorKey: 'logo',
    header: 'IMAGE',
    cell: ({ row }) => {
      const logoPath = row.getValue('logo') as string;
      const imageUrl = `${prePath}${logoPath}`;

      return (
        <div className='relative aspect-square h-16 w-16'>
          <Image
            src={imageUrl}
            alt={row.getValue('name') as string}
            fill
            className='rounded-lg object-cover'
          />
        </div>
      );
    }
  },
  {
    id: 'name',
    accessorFn: (row) => `${row.name} ${row.nameEn}`, // combine Arabic + English
    header: ({ column }: { column: Column<Category, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => (
      <div>
        {row.original.name} / {row.original.nameEn}
      </div>
    ),
    meta: {
      label: 'name',
      placeholder: 'بحث عن الفئة...', // search placeholder
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
