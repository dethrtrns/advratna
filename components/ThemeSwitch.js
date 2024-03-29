import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function ThemeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  // TODO: store and use the theme from local storage

  return (
    <Group position='center' my={30}>
      <Switch
        checked={colorScheme === "dark"}
        sx={{ backgroundColor: "transparent" }}
        color='dark'
        // opacity={0.9}
        onChange={() => toggleColorScheme()}
        size='md'
        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
        offLabel={
          <IconMoonStars color={theme.colors.gray[8]} size={20} stroke={1.5} />
        }
      />
    </Group>
  );
}
