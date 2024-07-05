import { createContext, useState } from "react";

function getUserFromLocalStorage() {
  function getLocalData(userData: string): string {
    return localStorage.getItem(userData);
  }

  try {
    return JSON.parse(getLocalData("user"));
  } catch (error) {
    return null;
  }
}

export const UserDataContext = createContext(null);

export const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<string[] | null>(getUserFromLocalStorage());

  function login(newUser: string[]): void {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout(): void {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <UserDataContext.Provider value={{ user, login, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};
