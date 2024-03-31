import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.lg,
    },
  },

  title: {
    fontFamily: "Greycliff CF",
    fontWeight: "bold",
  },
}));

const mockdata = [
  {
    title: "Understanding Family Law in India",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    date: "March 1, 2024",
  },
  {
    title: "A Comprehensive Guide to Civil Law in India",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    date: "March 2, 2024",
  },
  {
    title: "Understanding the Indian Penal Code: A Comprehensive Guide",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    date: "February 1, 2024",
  },
  {
    title: "Supreme Court's Landmark Judgment on Arbitration",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2023",
  },
  {
    title: "Recent Amendments to the Arbitration and Conciliation Act, 1996",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2023",
  },
  {
    title: "Enforcement of Foreign Arbitral Awards in India",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2023",
  },
  {
    title: "Arbitration in the Construction Industry",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
  {
    title: "Arbitration in the Banking and Finance Sector",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Arbitration in the Energy and Infrastructure Sector",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2021",
  },
  {
    title: "Arbitration in the Healthcare Sector",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2021",
  },
  {
    title: "Arbitration in the Technology Sector",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2021",
  },
  {
    title: "Arbitration in the Media and Entertainment Sector",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2020",
  },
  {
    title: "Arbitration in the Real Estate Sector",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Arbitration in the Intellectual Property Sector",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Arbitration in the Sports Sector",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
];

export default function ArticlesCardsGrid() {
  const { classes, theme } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      //   color={theme.colorScheme}
      //   bg={theme.colors.indigo[4]}
      p='md'
      radius='md'
      component='a'
      href='/blogs/blogpage'
      className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text
        c='dimmed'
        size='xs'
        tt='uppercase'
        fw={700}
        mt='md'>
        {article.date}
      </Text>
      <Text
        className={classes.title}
        mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container
      w={"100dvw"}
      py='xl'>
      <Text
        size='2.5rem'
        component='h1'
        variant='gradient'
      >
        Welcome to our blog section...
      </Text>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "md" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
          { minWidth: 1920, cols: 4, spacing: "md" },
        ]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
