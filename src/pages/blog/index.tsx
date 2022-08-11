import { Container } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "src/component/shared/Layout";

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">Blog</Container>
    </Layout>
  );
};

export default Blog;
