import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda
        aliquid delectus porro voluptatem explicabo et aliquam rerum totam,
        tenetur adipisci architecto illo quas libero ducimus dignissimos
        incidunt ipsam. Omnis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        expedita necessitatibus possimus, distinctio itaque dolores architecto
        ipsam molestias debitis nam laboriosam dolor porro dolore deserunt aut
        rem officia, optio totam.
      </p>
      <Link href="/contact">
        <a>Go TO Contact</a>
      </Link>
    </div>
  );
};

export default index;
