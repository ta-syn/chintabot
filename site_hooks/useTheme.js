'use client';

import { useTheme as useThemeContext } from '../site_context/ThemeContext';

export default function useTheme() {
  return useThemeContext();
}
