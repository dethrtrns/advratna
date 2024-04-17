import { Container, Flex, Image, Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  // console.log(router.query); // .query and .aspath
  return (
    <Flex
      component={'article'}
      w={"100vw"}
      pt={76}
      direction={"column"}
      justify='center'
      align='center'>
      <Text
        component={'h1'}
        p={1}
        m={1}
        fz={36}
        variant='gradient'>
        {router.query.id}
      </Text>
      <Text
        component={"time"}
        ff={'monospace'}
        fz={"xl"}
        // variant='gradient'
        // color={}
      >
        {router.query.date}
      </Text>
      {/* <Container> */}
      <Image
        // height={120}
        width={"80dvw"}
        src={router.query.img}
        alt={router.query.id}
        withPlaceholder
        placeholder={
          <Text align='center'>
            {router.query.id}-image was here...but ALAS.
          </Text>
        }
      />
      {/* </Container> */}
    </Flex>
  );
}
