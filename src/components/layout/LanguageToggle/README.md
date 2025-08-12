This directory contains a minimal i18n setup with a LanguageProvider and a LanguageToggle.

Usage:
- Wrap app providers with LanguageProvider (already done in `src/components/layout/providers.tsx`).
- Use `useI18n()` to access `t(key)`, `language`, `setLanguage`, and `dir`.
- The toggle is added in the header beside the theme toggle.

Notes:
- Only two languages are supported: English (`en`) and Arabic (`ar`).
- Direction (`dir`) is applied to `<html>` and `<body>` based on the active language.

