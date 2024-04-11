import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import Image from "next/image";
import CustomLink from "../utils/CustomLink";

const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    transition: "all 0.5s ease-in",
  },

  logo: {
    marginTop: -60,
    width: 150,
    minWidth: 100,
    maxWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",

    // [theme.fn.largerThan("lg")]: {
    //   marginTop: theme.spacing.xs,
    //   textAlign: "left",
    // },
  },

  description: {
    marginTop: -30,

    // [theme.fn.smallerThan("sm")]: {
    //   marginTop: theme.spacing.xs,
    //   textAlign: "center",
    // },
  },

  inner: {
    display: "flex",
    justifyContent: "space-around",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 200,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const data = [
  {
    title: "About",
    links: [
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
      {
        label: "Forums",
        link: "#",
      },
    ],
  },
  {
    title: "Project",
    links: [
      {
        label: "Contribute",
        link: "#",
      },
      {
        label: "Media assets",
        link: "#",
      },
      {
        label: "Blogs",
        link: "/blogs",
      },
      {
        label: "Latest updates",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Follow on Instagram",
        link: "#",
      },
      {
        label: "Follow on Facebook",
        link: "#",
      },
      {
        label: "Email newsletter",
        link: "#",
      },
      {
        label: "Check us on JustDial",
        link: "#",
      },
    ],
  },
];

export default function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <CustomLink
        key={index}
        className={classes.link}
        // component='a'
        href={link.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </CustomLink>
    ));

    return (
      <div
        className={classes.wrapper}
        key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <Flex
      component='footer'
      direction={"column"}
      justify={"space-between"}
      align={"stretch"}
      w={"100%"}
      className={classes.footer}>
      <Flex className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src={`/logo-${
              theme.colorScheme === "dark" ? "color" : "color"
              }-noBG.svg`}
            // height='150%'
            width={180}
            height={180}
            style={{
              aspectRatio: "1/1",
              borderRadius: "15%",
            }}
            priority
            alt='Ratna Associates'
            // width='100'
          />
          <Text
            fz={"sm"}
            fw={"bold"}
            ff={"sans-serif"}
            variant='gradient'
            color={theme.primaryColor}
            className={classes.description}>
            connect with our world class counselors for any legal service.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Flex>
      <Container className={classes.afterFooter}>
        <Text
          color='dimmed'
          size='sm'>
          © 2002 ratna associates All rights reserved.
        </Text>

        <Group
          spacing={0}
          className={classes.social}
          position='right'
          noWrap>
          <ActionIcon size='lg'>
            <IconBrandTwitter
              size={18}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube
              size={18}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram
              size={18}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </Flex>
  );
}
