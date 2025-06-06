type Theme = 'blue' | 'purple';

export const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const getTheme = (): Theme => {
  return (document.documentElement.getAttribute('data-theme') as Theme) || 'blue';
};