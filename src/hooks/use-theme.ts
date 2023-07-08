import { useTheme as useDefaultTheme } from 'next-themes';

export const useTheme = () => {
  const { resolvedTheme, setTheme } = useDefaultTheme();
  const isDark = resolvedTheme === 'dark';
  const prefixImg = isDark ? 'w' : 'b';

  return { isDark, prefixImg, setTheme };
};
