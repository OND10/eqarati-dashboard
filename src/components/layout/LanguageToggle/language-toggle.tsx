'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useI18n } from './language-provider';

export function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();

  const toggle = React.useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  }, [language, setLanguage]);

  return (
    <Button
      variant='secondary'
      size='icon'
      className='group/toggle size-8'
      onClick={toggle}
      aria-label={t('Toggle language')}
      title={t('Toggle language')}
    >
      <span className='font-semibold'>{language === 'en' ? 'AR' : 'EN'}</span>
      <span className='sr-only'>{t('Toggle language')}</span>
    </Button>
  );
}


