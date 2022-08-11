import { Container } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "src/component/shared/Layout";

const Portfolio: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">Portfolio</Container>
    </Layout>
  );
};

export default Portfolio;
