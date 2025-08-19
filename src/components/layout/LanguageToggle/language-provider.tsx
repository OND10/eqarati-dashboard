'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type SupportedLanguage = 'en' | 'ar';

type I18nContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    // Generic
    'Toggle theme': 'Toggle theme',
    'Toggle language': 'Toggle language',
    Theme: 'Theme',
    'Select a theme:': 'Select a theme:',
    'Select a theme': 'Select a theme',
    Default: 'Default',
    Blue: 'Blue',
    Green: 'Green',
    Amber: 'Amber',
    Scaled: 'Scaled',
    Monospaced: 'Monospaced',
    'Search...': 'Search...',
    'Add New': 'Add New',

    // Sidebar sections
    Overview: 'Overview',
    Platform: 'Platform',
    Projects: 'Projects',
    More: 'More',
    'View Project': 'View Project',
    'Share Project': 'Share Project',
    'Delete Project': 'Delete Project',

    // User / account
    Profile: 'Profile',
    Billing: 'Billing',
    Notifications: 'Notifications',
    Settings: 'Settings',
    'New Team': 'New Team',

    // Nav items
    Dashboard: 'Dashboard',
    Product: 'Product',
    Account: 'Account',
    Login: 'Login',
    Kanban: 'Kanban',

    // Kanban
    'Manage tasks by dnd': 'Manage tasks by dnd',
    'Add New Section': 'Add New Section',
    'What section you want to add today?': 'What section you want to add today?',
    'Section title...': 'Section title...',
    'Add Section': 'Add Section',
    'Add New Todo': 'Add New Todo',
    'What do you want to get done today?': 'What do you want to get done today?',
    'Todo title...': 'Todo title...',
    'Description...': 'Description...',
    'Add Todo': 'Add Todo',

    // Profile
    'Edit product': 'Edit product',
    'Create Your Profile': 'Create Your Profile',
    'Edit a product.': 'Edit a product.',
    'To create your resume, we first need some basic information about you.':
      'To create your resume, we first need some basic information about you.'
  },
  ar: {
    // Generic
    'Toggle theme': 'تبديل السمة',
    'Toggle language': 'تبديل اللغة',
    Theme: 'السمة',
    'Select a theme:': 'اختر سمة:',
    'Select a theme': 'اختر سمة',
    Default: 'افتراضي',
    Blue: 'أزرق',
    Green: 'أخضر',
    Amber: 'كهرماني',
    Scaled: 'مكبر',
    Monospaced: 'أحادي المسافة',
    'Search...': 'ابحث...'
    ,
    'Add New': 'إضافة جديد',

    // Sidebar sections
    Overview: 'نظرة عامة',
    Platform: 'المنصة',
    Projects: 'المشاريع',
    More: 'المزيد',
    'View Project': 'عرض المشروع',
    'Share Project': 'مشاركة المشروع',
    'Delete Project': 'حذف المشروع',

    // User / account
    Profile: 'الملف الشخصي',
    Billing: 'الفوترة',
    Notifications: 'الإشعارات',
    Settings: 'الإعدادات',
    'New Team': 'فريق جديد',

    // Nav items
    Dashboard: 'لوحة التحكم',
    Product: 'المنتج',
    Account: 'الحساب',
    Login: 'تسجيل الدخول',
    Kanban: 'كانبان',

    // Kanban
    'Manage tasks by dnd': 'إدارة المهام بالسحب والإفلات',
    'Add New Section': 'إضافة قسم جديد',
    'What section you want to add today?': 'ما القسم الذي تريد إضافته اليوم؟',
    'Section title...': 'عنوان القسم...',
    'Add Section': 'إضافة قسم',
    'Add New Todo': 'إضافة مهمة جديدة',
    'What do you want to get done today?': 'ما الذي تريد إنجازه اليوم؟',
    'Todo title...': 'عنوان المهمة...',
    'Description...': 'الوصف...',
    'Add Todo': 'إضافة مهمة',

    // Profile
    'Edit product': 'تعديل المنتج',
    'Create Your Profile': 'أنشئ ملفك الشخصي',
    'Edit a product.': 'قم بتعديل منتج.',
    'To create your resume, we first need some basic information about you.':
      'لإنشاء سيرتك الذاتية، نحتاج أولاً إلى بعض المعلومات الأساسية عنك.'
  }
};

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    // Try to read from cookies for SSR
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )language=(en|ar)/);
      if (match) return match[1] as SupportedLanguage;
    }
    return 'en';
  }
  try {
    const stored = window.localStorage.getItem('language') as SupportedLanguage | null;
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {}
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => getInitialLanguage());

  const dir: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try {
      window.localStorage.setItem('language', language);
      document.documentElement.setAttribute('lang', language);
      document.documentElement.setAttribute('dir', dir);
      // Also mirror on body to help some CSS selectors if needed
      document.body.setAttribute('dir', dir);
    } catch {}
    // Set a short-lived cookie to support (optional) server awareness
    try {
      document.cookie = `language=${language}; path=/; max-age=31536000`;
    } catch {}
  }, [language, dir]);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string) => {
      const table = TRANSLATIONS[language];
      return table[key] ?? key;
    },
    [language]
  );

  const value = useMemo<I18nContextType>(
    () => ({ language, setLanguage, dir, t }),
    [language, setLanguage, dir, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within LanguageProvider');
  }
  return ctx;
}


