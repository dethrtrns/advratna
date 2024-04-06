import { Button, Flex, Text } from "@mantine/core";
import HeaderMiddle from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <Flex
      w={"100dvw"}
      mih={"100dvh"}
      direction={"column"}
      justify={"space-between"}
      align={"center"}>
      <HeaderMiddle />
      <Flex
        w={"100%"}
        // justify={"space-between"}
        direction={"column"}
        component='main'>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
