import { Container, Text, ThemeIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter, IconRss } from "@tabler/icons";
import type { NextPage } from "next";
import { Blog } from "src/component/blog";
import { Github } from "src/component/Github";
import { Portfolio } from "src/component/portfolio";
import { Layout } from "src/component/shared/Layout";
import { Twitter } from "src/component/Twitter";
import { useMediaQuery } from "src/lib/mantine";

const Home: NextPage = () => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Layout title="Home">
      <div className="w-full bg-m_pink-6 h-60">
        <Container size="md">
          <div
            className={
              largerThanSm
                ? "flex justify-between items-center h-60"
                : "flex flex-col justify-center h-60"
            }
          >
            <div>
              <Text weight={700} size={largerThanSm ? 36 : 28} color="white">
                Qin Portfolio
              </Text>
              <Text weight={700} size="xs" color="white">
                ポートフォリオ
              </Text>
            </div>

            <div className={largerThanSm ? "space-x-2" : "space-x-2 mt-10"}>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconBrandTwitter />
              </ThemeIcon>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconBrandFacebook />
              </ThemeIcon>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconRss />
              </ThemeIcon>
            </div>
          </div>
        </Container>
      </div>

      <Container size="md">
        <Blog />
        <Portfolio />

        <div className={largerThanSm ? "flex justify-between" : undefined}>
          <Github />
          <Twitter />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
