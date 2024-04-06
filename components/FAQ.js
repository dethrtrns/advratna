import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
  Text,
} from "@mantine/core";
import image from "../public/image.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    transition: "all 0.5s linear",
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    transition: "all 0.5s linear",
  },

  item: {
    fontSize: theme.fontSizes.sm,

    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export default function FAQ() {
  const { classes, theme } = useStyles();
  return (
    <div
      id='faq'
      className={classes.wrapper}>
      <Container size='lg'>
        <Grid
          id='faq-grid'
          gutter={50}>
          <Col
            span={12}
            md={6}>
            <Image
              src={image.src}
              alt='Frequently Asked Questions'
            />
          </Col>
          <Col
            span={12}
            md={6}>
            <Title
              order={2}
              align='left'
              className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition='right'
              defaultValue='reset-password'
              variant='separated'>
              {/* <Accordion.Item
                className={classes.item}
                value='reset-password'>
                <Accordion.Control>
                  <Text>Why should I try settlement through mediation?</Text>
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item> */}

              <Accordion.Item
                className={classes.item}
                value='another-account'>
                <Accordion.Control>
                  <Text>
                    What to do when my spouse is Not willing to give divorce?
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  If the matter is not resolved amicably and mutual consent is
                  not reached, firstly file a claim under S. 125 of CrPC for
                  maintenance. After that you can file for a contested divorce
                  on the grounds of cruelty under S. 13 (1) of the Hindu
                  Marriage Act, 1955.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item
                className={classes.item}
                value='newsletter'>
                <Accordion.Control>
                  <Text>
                    What are the steps involved in Mutually agreed Divorce?
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  First, Both spouses must have lived apart for at least six
                  months.
                  <br></br>
                  Step 1: Drafting and Filing Petition (submitting divorce
                  application)
                  <br></br>
                  Step 2: Issuing Summons ( Court Notice)
                  <br></br>
                  Step 3: Response (to Court Notice)
                  <br></br>
                  Step 4: Trial at Court
                  <br></br>
                  Step 5: Argument
                  <br></br>
                  Step 6 : Final Order(Divorce completion)
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item
                className={classes.item}
                value='credit-card'>
                <Accordion.Control>
                  <Text>Who gets the child's custody after divorce?</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  There are various types of custodies granted to parents, which
                  can include the following: <br></br> a) Physical custody: This
                  implies that one of the parents acts as a primary guardian and
                  the child stays with him, while the other parent is granted
                  visitation rights and can meet and spend time with the child.{" "}
                  <br></br>
                  b) Joint custody: Here both the parents get the child’s
                  custody in rotation. This implies that the child stays with
                  each parent for a fixed duration.<br></br> c) Legal custody:
                  This means that one or both the parents get the right to take
                  all major life decisions for the child, including those for
                  his education, finances, religious preferences or medical
                  needs, till he turns 18. <br></br> d) Sole custody: If one
                  parent is considered unfit to take care of the child, the
                  other parent is given full custody of the child.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item
                className={classes.item}
                value='payment'>
                <Accordion.Control>
                  <Text>

                  How long do I have to wait after the marriage to file for
                  divorce?
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  You can file for divorce only after completion of 1 year of
                  marriage based on the grounds given under the Hindu Marriage
                  Act. If your marriage is less than 1 year old, then you can
                  try to apply for an annulment based on special reasons like:{" "}
                  <br></br> Adultery, Cruelty, Desertion, Mental Disorder, etc.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
