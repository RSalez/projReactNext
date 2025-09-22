'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 border rounded mb-4">
      {isDark ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
}