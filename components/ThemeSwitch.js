import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function ThemeSwitch() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  // TODO: store and use the theme from local storage

  // useEffect(() => {
  //   router.replace({
  //     href: router.asPath,
  //     query: {
  //       ...router.query,
  //       colorScheme,
  //     },
  //   });
  // }, [colorScheme]);

  return (
    <Group
      position='center'
      my={30}>
      <Switch
        checked={colorScheme === "dark"}
        sx={{ backgroundColor: "transparent" }}
        color='dark'
        // opacity={0.9}
        onChange={() => {
          // router.replace
          // router.replace({
          //   // href: router.asPath,
          //   query: {
          //     ...router.query,
          //     colorScheme,
          //   },
          // });
          toggleColorScheme();
        }}
        size='md'
        onLabel={
          <IconSun
            color={theme.white}
            size={20}
            stroke={1.5}
          />
        }
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[8]}
            size={20}
            stroke={1.5}
          />
        }
      />
    </Group>
  );
}
