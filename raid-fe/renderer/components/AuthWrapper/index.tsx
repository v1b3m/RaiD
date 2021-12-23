import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { UseGetAuth } from "../../state/auth/hooks";

type AuthPropTypes = {
  children?: React.ReactNode;
};

export const Auth: FC<AuthPropTypes> = ({ children }) => {
  const auth = UseGetAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn && router) {
      router.push("/");
    }
  }, [router, auth.isLoggedIn]);

  return <>{children}</>;
};

export default Auth;
