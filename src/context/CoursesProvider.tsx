import { createContext, useState } from "react";

export const CoursesContext = createContext(null);

export const CoursesProvider = ({ children }) => {
  const [cards, setCards] = useState<string>("");

  return (
    <CoursesContext.Provider value={{ cards, setCards }}>
      {children}
    </CoursesContext.Provider>
  );
};
