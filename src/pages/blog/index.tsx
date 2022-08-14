import { Container } from "@mantine/core";
import { NextPage } from "next";
import { BlogContainer } from "src/components/pages/blog";
import { Layout } from "src/components/shared/Layout";

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <BlogContainer />
      </Container>
    </Layout>
  );
};

export default Blog;
