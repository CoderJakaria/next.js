import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div>
      <Head>
        <title>404 Page</title>
      </Head>
      this is 404 page go back to navbar
    </div>
  );
};

export default NotFound;
