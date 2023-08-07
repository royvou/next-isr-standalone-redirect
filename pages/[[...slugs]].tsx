import { GetStaticPaths, GetStaticProps } from "next";

import React from "react";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const result = await (
    await fetch(`http://localhost:3000/api/getValue`)
  ).json();
  console.log(`Page from CMS exists? ${JSON.stringify(result)}`);
  if (!result.result) {
    console.log(`Result: Redirect`);
    return {
      redirect: {
        permanent: false,
        destination: "/redirected",
      },
      // Different revalidate to also see it in the headers
      revalidate: 2,
    };
  }

  console.log(`Result: Props`);
  return {
    props: {
      title: `Hello ${ctx.params.slugs} `,
    },
    revalidate: 1,
  };
};

const slugs = ({ title }) => {
  return <div>This is the page with {title}</div>;
};

export default slugs;
