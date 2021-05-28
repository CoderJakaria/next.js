import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>ABout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        voluptatum? Illum fuga, accusamus dolorem illo maxime distinctio nam
        asperiores repudiandae non omnis vitae nobis aspernatur esse unde
        eligendi libero quis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
        mollitia aut dicta provident, labore architecto neque quidem quis velit
        possimus aspernatur culpa dolorum eaque sed rem amet corporis quasi!
      </p>
    </div>
  );
};

export default about;
