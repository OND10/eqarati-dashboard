import { cookies } from 'next/headers';

export type SupportedLanguage = 'en' | 'ar';

export const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
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

    Overview: 'Overview',
    Platform: 'Platform',
    Projects: 'Projects',
    More: 'More',
    'View Project': 'View Project',
    'Share Project': 'Share Project',
    'Delete Project': 'Delete Project',

    Profile: 'Profile',
    Billing: 'Billing',
    Notifications: 'Notifications',
    Settings: 'Settings',
    'New Team': 'New Team',

    Dashboard: 'Dashboard',
    Product: 'Product',
    Account: 'Account',
    Login: 'Login',
    Kanban: 'Kanban',

    Products: 'Products',
    'Manage products (Server side table functionalities.)':
      'Manage products (Server side table functionalities.)'
  },
  ar: {
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
    Overview: 'نظرة عامة',
    Platform: 'المنصة',
    Projects: 'المشاريع',
    More: 'المزيد',
    'View Project': 'عرض المشروع',
    'Share Project': 'مشاركة المشروع',
    'Delete Project': 'حذف المشروع',

    Profile: 'الملف الشخصي',
    Billing: 'الفوترة',
    Notifications: 'الإشعارات',
    Settings: 'الإعدادات',
    'New Team': 'فريق جديد',

    Dashboard: 'لوحة التحكم',
    Product: 'المنتج',
    Account: 'الحساب',
    Login: 'تسجيل الدخول',
    Kanban: 'كانبان',

    Products: 'المنتجات',
    'Manage products (Server side table functionalities.)':
      'إدارة المنتجات (وظائف جدول من جانب الخادم.)'
  }
};

export function translate(language: SupportedLanguage, key: string): string {
  return TRANSLATIONS[language][key] ?? key;
}

export async function getServerLanguage(): Promise<SupportedLanguage> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('language')?.value as SupportedLanguage | undefined;
  return lang === 'ar' || lang === 'en' ? lang : 'en';
}


