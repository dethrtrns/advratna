import { Button, Flex, Text } from "@mantine/core";
import HeaderMiddle from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <Flex
      w={"100dvw"}
      mih={"100dvh"}
      direction={"column"}
      justify={"space-between"}
      align={"center"}>
      <HeaderMiddle />
      {/* <Text size={200}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores libero adipisci voluptates accusantium beatae eaque necessitatibus. Aperiam temporibus eveniet molestias porro dolorum, beatae dicta aliquid a quis quisquam mollitia?</Text> */}
      <Footer />
    </Flex>
  );
}
