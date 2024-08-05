import { createContext, FC, PropsWithChildren, useState } from "react";
import { UserCoursesContextType, UserCourseType } from "../types";

export const UserCoursesContext = createContext<UserCoursesContextType | null>(
  null,
);

export const UserCoursesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userCourses, setUserCourses] = useState<UserCourseType[]>([]);

  return (
    <UserCoursesContext.Provider value={{ userCourses, setUserCourses }}>
      {children}
    </UserCoursesContext.Provider>
  );
};
