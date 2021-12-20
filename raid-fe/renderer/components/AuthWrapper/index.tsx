import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useSession } from "../../context/SessionContext";

type AuthPropTypes = {
  children?: React.ReactNode;
};

export const Auth: FC<AuthPropTypes> = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user && router) {
      router.push("/");
    }
  }, [router, session]);

  return <>{children}</>;
};

export default Auth;
