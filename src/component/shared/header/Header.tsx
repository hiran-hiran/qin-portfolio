import {
  ActionIcon,
  Box,
  CloseButton,
  Container,
  Drawer,
  Group,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconMenu2, IconMoon } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "src/lib/mantine";

import { NavItems } from "./constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const largerThanSm = useMediaQuery("sm");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box className="w-full">
      <Drawer
        opened={isOpen}
        onClose={toggleMenu}
        padding="xl"
        size="full"
        styles={{
          drawer: { backgroundColor: "#E64980" },
          closeButton: {
            display: "none",
          },
        }}
      >
        <CloseButton onClick={toggleMenu} size="md" color="white" />
        <Box className="mt-100">
          {NavItems.map((nav) => {
            return (
              <Link href={nav.path} key={nav.path}>
                <Text
                  weight={700}
                  size={28}
                  color="white"
                  className={largerThanSm ? undefined : "text-red"}
                >
                  {nav.text}
                </Text>
              </Link>
            );
          })}
        </Box>
      </Drawer>

      <Container size="md">
        <Box
          component="header"
          className={
            largerThanSm
              ? "w-full flex items-center justify-between h-16 bg"
              : "w-full flex items-center justify-center h-16"
          }
        >
          <ActionIcon
            variant="light"
            className={largerThanSm ? "hidden" : undefined}
            onClick={toggleMenu}
          >
            <IconMenu2 />
          </ActionIcon>

          <Text
            weight={700}
            size="lg"
            component="h1"
            className={largerThanSm ? undefined : "m-auto"}
          >
            <Link href="/">Qin Portfolio</Link>
          </Text>

          <Group position="right" spacing="xl" align="center">
            {NavItems.map((nav) => {
              return (
                <Link href={nav.path} key={nav.path}>
                  <Text
                    weight={700}
                    size="lg"
                    className={largerThanSm ? "cursor-pointer" : "hidden"}
                    color="dark"
                  >
                    {nav.text}
                  </Text>
                </Link>
              );
            })}

            <ThemeIcon variant="outline" color="dark">
              <IconMoon />
            </ThemeIcon>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};
