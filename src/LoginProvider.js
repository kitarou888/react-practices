import { LoginContext } from "./LoginContext";

export function LoginProvider({ children, isLogin }) {
  if (isLogin === null) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <LoginContext.Provider value={isLogin}>{children}</LoginContext.Provider>
  );
}
