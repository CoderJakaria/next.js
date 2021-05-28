import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(coder => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;

  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { coder: data },
  };
};

const id = ({ coder }) => {
  return (
    <div>
      <h2>{coder.name}</h2>
      <p>{coder.email}</p>
    </div>
  );
};

export default id;
