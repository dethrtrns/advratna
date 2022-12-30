import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from "@mantine/core";
import HeaderMiddle from "./Header";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: "500",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      "url(https://media.istockphoto.com/id/1136594579/photo/justice-system-in-india.jpg?s=1024x1024&w=is&k=20&c=ECWKapZo27kuvU-C1jWsw-yk89pU1psRQEgpqU1M61g=)",
    backgroundSize: "cover",
    backgroundColor: theme.primaryColor,
    backgroundBlendMode: "luminosity",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function Hero() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color='#000' opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <HeaderMiddle />
        <Title className={classes.title}>
          Automated AI code reviews for{" "}
          <Text component='span' inherit className={classes.highlight}>
            any stack
          </Text>
        </Title>

        <Container size={640}>
          <Text size='lg' className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant='white' size='lg'>
            Get started
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size='lg'
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}
