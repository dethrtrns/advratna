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
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandGoogle,
  IconCircleLetterJ,
} from "@tabler/icons";
// import { MantineLogo } from "@mantine/ds";
import { ThemeSwitch } from "./ThemeSwitch";
import { Html } from "next/document";

const links = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "about",
    label: "About Us",
  },
  {
    link: "faq",
    label: "FAQ",
  },
  {
    link: "contact",
    label: "Contact Us",
  },
];

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("xs")]: {
      justifyContent: "flex-start",
    },
    transition: "all 0.5s linear",
  },

  links: {
    // width: 260,

    [theme.fn.smallerThan("xs")]: {
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

    [theme.fn.largerThan("xs")]: {
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
        ? theme.colors.gray[0]
        : theme.colors.dark[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      opacity: 0.2,
      backgroundColor: theme.primaryColor,
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
        document.getElementById(link.link).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
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

        <Text
          variant='gradient'
          size={18}
          color={theme.primaryColor}
          component='h1'
        >
          Advocate Ratna Singh
        </Text>
        {/* <MantineLogo size={28}></MantineLogo> */}

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <ActionIcon
            component='a'
            target='_blank'
            href='https://www.google.com/search?q=ratna+singh+advocate+lucknow&rlz=1C1CHBF_enIN964IN964&sxsrf=ALiCzsZdt26cu0MGYF7TQ5OxAp6vePAYSg%3A1672578124867&ei=TISxY92yNNSMseMPpOqGqA8&ved=0ahUKEwjdiPeHt6b8AhVURmwGHSS1AfUQ4dUDCBA&uact=5&oq=ratna+singh+advocate+lucknow&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzoHCCMQsAMQJzoOCC4QgAQQxwEQrwEQsAM6CAgAEIYDELADOgYIABAWEB46BQgAEIYDOgUIIRCgAUoECEEYAUoECEYYAFC7BFiALWD_Q2gCcAB4AIABrAGIAYkKkgEDMC45mAEAoAEByAEHwAEB&sclient=gws-wiz-serp'
            // 'https://www.google.com/search?q=ratna+singh+advocate&rlz=1C1CHBF_enIN964IN964&oq=ratna+singh+advocate&aqs=chrome..69i57j0i390.6271j0j7&sourceid=chrome&ie=UTF-8'
            color={theme.primaryColor}
            className={classes.iconBack}
            size='lg'
          >
            <IconBrandInstagram
              // href='https://www.google.com/search?q=ratna+singh+advocate&rlz=1C1CHBF_enIN964IN964&oq=ratna+singh+advocate&aqs=chrome..69i57j0i390.6271j0j7&sourceid=chrome&ie=UTF-8'
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
            component='a'
            target='_blank'
            href='https://www.facebook.com/ratnoja.singh.rathore/'
            color={theme.primaryColor}
            className={classes.iconBack}
            size='lg'
          >
            <IconBrandFacebook
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
            component='a'
            target='_blank'
            href='https://www.justdial.com/Lucknow/Ratna-Singh-Advocate-Near-Malhaur-Station-Gomti-Nagar/0522PX522-X522-140413062127-G5N1_BZDET'
            color={theme.primaryColor}
            size='lg'
          >
            <IconCircleLetterJ
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
