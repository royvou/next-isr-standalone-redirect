import { GetStaticProps } from "next";

const redirected = () => {
  return <div>This is the redirected page</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default redirected;
