import { Flex, Text } from "@mantine/core";
import Layout from "../../components/layout/Layout";

export default function Playground() {
  return (
    <>
      <Flex
        sx={
          {
            // zIndex: 50,
          }
        }
        w={"100dvw"}
        mih={"100dvh"}
        // bg={"gray"}
        justify={"start"}
        align={"start"}>
        <Layout>
          {/* <Text>hey</Text>
        <Text>ho</Text>  */}
          <Text size={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            asperiores libero adipisci voluptates accusantium beatae eaque
            necessitatibus. Aperiam temporibus eveniet molestias porro dolorum,
            beatae dicta aliquid a quis quisquam mollitia?
          </Text>
        </Layout>
      </Flex>
    </>
  );
}
