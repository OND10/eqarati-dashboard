'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/components/layout/LanguageToggle/language-provider';

import { useTaskStore } from '../utils/store';

export default function NewSectionDialog() {
  const { t } = useI18n();
  const addCol = useTaskStore((state) => state.addCol);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title } = Object.fromEntries(formData);

    if (typeof title !== 'string') return;
    addCol(title);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary' size='lg' className='w-full'>
          ＋ {t('Add New Section')}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{t('Add New Section')}</DialogTitle>
          <DialogDescription>
            {t('What section you want to add today?')}
          </DialogDescription>
        </DialogHeader>
        <form
          id='todo-form'
          className='grid gap-4 py-4'
          onSubmit={handleSubmit}
        >
          <div className='grid grid-cols-4 items-center gap-4'>
            <Input
              id='title'
              name='title'
              placeholder={t('Section title...')}
              className='col-span-4'
            />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type='submit' size='sm' form='todo-form'>
              {t('Add Section')}
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
