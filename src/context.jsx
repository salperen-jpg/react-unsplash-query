import { useContext, createContext, useState, useEffect } from 'react';

const ImagesContext = createContext();

const getInitialTheme = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  console.log(prefersDarkMode);
  const storedDarkMode = localStorage.getItem('darkTheme');
  console.log(storedDarkMode);
  if (storedDarkMode === 'false') {
    return false;
  } else {
    return prefersDarkMode;
  }
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [searchTerm, setSearchTerm] = useState('dog');

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ImagesContext.Provider
      value={{ searchTerm, setSearchTerm, isDarkTheme, toggleTheme }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export const useImagesContext = () => useContext(ImagesContext);
