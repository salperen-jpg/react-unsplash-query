import { useContext, createContext } from 'react';

const ImagesContext = createContext();

export const AppProvider = ({ children }) => {
  return <ImagesContext.Provider>{children}</ImagesContext.Provider>;
};

export const useImagesContext = () => useContext(ImagesContext);
