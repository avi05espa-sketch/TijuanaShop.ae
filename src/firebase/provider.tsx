import { app } from "./config";

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  );
};
