import { useState } from "react";

export function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    const nextIsLogin = !isLogin;
    if (!isLogin) {
      setIsLogin(null);
      setTimeout(() => setIsLogin(nextIsLogin), 2000);
    } else {
      setIsLogin(nextIsLogin);
    }
  };

  const loginButton = (
    <button onClick={handleLogin}>{isLogin ? "ログアウト" : "ログイン"}</button>
  );

  return [isLogin, loginButton];
}
