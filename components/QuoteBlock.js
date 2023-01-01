import { Box, createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.primaryColor, //"#380568", //theme.palette.primary.dark,
    backgroundColor: "rgba(76, 72, 185, 0.9)", //theme.palette.primary.light,
    backgroundImage: `url('/purple-quote.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundBlendMode: "screen", //"soft-light", //,
    backgroundPosition: "left",
    border: "1px solid",
    borderLeft: "10px solid",
    // borderColor: "black",
    borderColor: theme.primaryColor, //"#7208d6", //theme.palette.primary.main,
    width: "95%",
    maxWidth: "90vw",
    margin: "1em",
    marginLeft: "3em",
    padding: "2em 1em 1.5em 4em",
  },
  quote: {
    fontSize: "1.5em",
    fontStyle: "italic",
    fontWeight: "500",
  },
  author: {
    textAlign: "right",
    fontSize: "1.8em",
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));
//TODO: add some nice fonts here!

export default function QuoteBlock({ quote, author }) {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.root}>
      <Text className={classes.quote}>{quote}</Text>
      <Text className={classes.author}>~{author || "Author"}</Text>
    </Box>
  );
}
