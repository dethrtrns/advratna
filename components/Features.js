import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie, IconGavel } from "@tabler/icons";

const mockdata = [
  {
    title: "Divorce Matters",
    description:
      "Divorce is still considered to be one of the most painful and traumatic experiences for a married couple.It would create a mess if the procedure is not known properly and can get extremely outrageous and can also be time-consuming. Our 15 years of pratice in family law, helps to provide the proper guidance that you need throughout the entire complicated process in the most easiest and hassle-free way.",
    icon: IconGavel,
  },
  {
    title: "Family Disputes",
    description:
      "Family conflict refers to active opposition between family members. Because of the nature of family relationships, it can take a wide variety of forms, including verbal, physical, sexual, financial, or psychological.",
    icon: IconUser,
  },
  {
    title: "Mediation & Settlements",
    description:
      "Mediation is an informal, but structured settlement procedure. A mediator is employed to facilitate and assist parties in reaching an amicable dispute settlement. Mediation is generally much less costly and time-consuming than litigating a divorce case in court. ",
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    transition: "all 0.5s linear",
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Features() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={classes.card}
      p='xl'
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size='lg' weight={500} className={classes.cardTitle} mt='md'>
        {feature.title}
      </Text>
      <Text size='sm' color='dimmed' mt='sm'>
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container
      sx={{
        transition: "all 0.4s linear",
      }}
      id='about'
      size='lg'
      py='xl'
    >
      <Group position='center'>
        <Badge variant='filled' size='lg'>
          Our Services
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align='center' mt='sm'>
        We provide legal counsel in a wide variety of Family cases
      </Title>

      <Text
        color='dimmed'
        className={classes.description}
        align='center'
        mt='md'
      >
        We'll do our best to resolve your pain, Inside & Out of the courtroom,
        in the least time consuming & hassle-free way possible!
      </Text>

      <SimpleGrid
        cols={3}
        spacing='xl'
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
