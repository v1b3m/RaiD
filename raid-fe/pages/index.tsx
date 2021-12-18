import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "../components/auth/Login";
import { useSession } from "../context/SessionContext";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && router) {
      router.push("/manage");
    }
  }, [router, session]);

  return <Login />;
};

export default Home;
