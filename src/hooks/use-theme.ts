import { useTheme as useDefaultTheme } from 'next-themes';

export const useTheme = () => {
  const { resolvedTheme, setTheme } = useDefaultTheme();
  const isDark = resolvedTheme === 'dark';

  return { isDark, setTheme };
};
