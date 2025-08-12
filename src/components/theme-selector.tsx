'use client';

import { useThemeConfig } from '@/components/active-theme';
import { Label } from '@/components/ui/label';
import { useI18n } from './layout/LanguageToggle/language-provider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const DEFAULT_THEMES = [
  {
    name: 'Default',
    value: 'default'
  },
  {
    name: 'Blue',
    value: 'blue'
  },
  {
    name: 'Green',
    value: 'green'
  },
  {
    name: 'Amber',
    value: 'amber'
  }
];

const SCALED_THEMES = [
  {
    name: 'Default',
    value: 'default-scaled'
  },
  {
    name: 'Blue',
    value: 'blue-scaled'
  }
];

const MONO_THEMES = [
  {
    name: 'Mono',
    value: 'mono-scaled'
  }
];

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const { t } = useI18n();

  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='theme-selector' className='sr-only'>
        {t('Theme')}
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id='theme-selector'
          className='justify-start *:data-[slot=select-value]:w-12'
        >
          <span className='text-muted-foreground hidden sm:block'>
            {t('Select a theme:')}
          </span>
          <span className='text-muted-foreground block sm:hidden'>{t('Theme')}</span>
          <SelectValue placeholder={t('Select a theme')} />
        </SelectTrigger>
        <SelectContent align='end'>
          <SelectGroup>
            <SelectLabel>{t('Default')}</SelectLabel>
            {DEFAULT_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {t(theme.name)}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>{t('Scaled')}</SelectLabel>
            {SCALED_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {t(theme.name)}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>{t('Monospaced')}</SelectLabel>
            {MONO_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {t(theme.name)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
