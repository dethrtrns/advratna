import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { ThemeSwitch } from "./ThemeSwitch";

const links = [
  {
    link: "/about",
    label: "Home",
  },
  {
    link: "/learn",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
];

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  iconBack: {
    backgroundColor: theme.primaryColor[9],
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export default function HeaderMiddle() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header bg={"transparent"} fixed withBorder={false} zIndex={20} height={56}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          color={theme.colorScheme === "dark" ? "white" : "black"}
          bg={"none"}
          size='md'
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Text variant='text' color={theme.primaryColor} component='h1'>
          Ratna Associates
        </Text>
        {/* <MantineLogo size={28}></MantineLogo> */}

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <ActionIcon
            color={theme.primaryColor}
            className={classes.iconBack}
            size='lg'
          >
            <IconBrandTwitter
              size={18}
              color={
                theme.colorScheme === "dark"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9]
              }
              stroke={2}
            />
          </ActionIcon>
          <ActionIcon
            color={theme.primaryColor}
            className={classes.iconBack}
            size='lg'
          >
            <IconBrandYoutube
              size={18}
              color={
                theme.colorScheme === "dark"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9]
              }
              stroke={2}
            />
          </ActionIcon>
          <ActionIcon color={theme.primaryColor} size='lg'>
            <IconBrandInstagram
              size={18}
              color={
                theme.colorScheme === "dark"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9]
              }
              stroke={2}
            />
          </ActionIcon>
        </Group>
        <ThemeSwitch />
      </Container>
    </Header>
  );
}
