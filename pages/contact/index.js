import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { coder: data },
  };
};
const Contact = ({ coder }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      {coder?.map(code => (
        <h2 onClick={() => router.push(`/contact/${code.id}`)} key={code.id}>
          {code.name}
        </h2>
      ))}
    </div>
  );
};

export default Contact;
