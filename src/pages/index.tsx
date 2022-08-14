import { Box, Container, Text } from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter, IconRss } from "@tabler/icons";
import type { NextPage } from "next";
import { Blog } from "src/components/blog";
import { Github } from "src/components/Github";
import { Portfolio } from "src/components/portfolio";
import { Layout } from "src/components/shared/Layout";
import { Twitter } from "src/components/Twitter";
import { useCustomMediaQuery } from "src/libs/mantine";

const Home: NextPage = () => {
  const isPC = useCustomMediaQuery("sm");

  return (
    <Layout title="Home">
      <Box className="w-full bg-m_pink-6 h-60">
        <Container size="md">
          <Box
            className={
              isPC
                ? "flex justify-between items-center h-60"
                : "flex flex-col justify-center h-60"
            }
          >
            <Box>
              <Text weight={700} size={isPC ? 36 : 28} color="white">
                Qin Portfolio
              </Text>
              <Text weight={700} size="xs" color="white">
                ポートフォリオ
              </Text>
            </Box>

            <Box className={isPC ? "flex space-x-2" : "flex space-x-2 mt-10"}>
              <IconBrandTwitter color="transparent" fill="white" />
              <IconBrandFacebook color="transparent" fill="white" />
              <IconRss color="white" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container size="md">
        <Blog />
        <Portfolio />
        <Box className={isPC ? "flex justify-between space-x-10" : undefined}>
          <Github />
          <Twitter />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
