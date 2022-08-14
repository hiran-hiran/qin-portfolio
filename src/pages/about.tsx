import { Container } from "@mantine/core";
import { NextPage } from "next";
import { AboutContainer } from "src/components/pages/about";
import { Layout } from "src/components/shared/Layout";

const Portfolio: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <AboutContainer />
      </Container>
    </Layout>
  );
};

export default Portfolio;
