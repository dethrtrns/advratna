import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  NumberInput,
  Alert,
  Progress,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconAlertCircle,
  IconSend,
} from "@tabler/icons";
import { useState } from "react";
import { ContactIconsList } from "../utils/ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    // backgroundBlendMode: "color-dodge",
    // opacity: 0.8,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 80%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,
    transition: "all 0.5s linear",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactUs() {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);

  const submitForm = () => {
    setLoading(true);
    //call Database
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant='transparent'
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div id='contact' className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        sx={{
          opacity: 1,
        }}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt='sm' mb={30}>
            We're available 24*7 at your service.
          </Text>

          <ContactIconsList variant='white' />

          <Group mt='xl'>{icons}</Group>
        </div>
        <div className={classes.form}>
          <Alert
            variant='filled'
            icon={<IconAlertCircle size={16} />}
            title='note'
            color='teal'
          >
            We never share your information(personal or otherwise) without your
            consent.
          </Alert>
          <TextInput
            label='Email'
            description='required'
            placeholder='Type your email address here...'
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <NumberInput
            label='Phone'
            placeholder='Type your contact number here...'
            description='required'
            required
            hideControls
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label='Name'
            description='optional(to get in touch anonymously)'
            placeholder='Enter your name here if you are comfortable...'
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label='Your message'
            description='required'
            placeholder='Start Typing your message here...'
            minRows={4}
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          {loading && (
            <Progress
              radius='xl'
              size='sm'
              color={"violet"}
              value={100}
              striped
              animate
            />
          )}
          <Group position='right' mt='md'>
            <Button
              // type='reset'
              variant='gradient'
              loading={loading}
              loaderProps={{ variant: "dots" }}
              // loaderPosition='center'
              compact={loading}
              onClick={submitForm}
              leftIcon={<IconSend size={14} />}
              className={classes.control}
            >
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
