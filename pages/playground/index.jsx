import { Flex, Text } from '@mantine/core'

export default function Playground() {
    return <>
        <Flex sx={{
            zIndex: 999,
        }} w={'100dvw'} mih={'100dvh'} bg={'red'} justify={'center'} align={'start'} >

        <Text size={25} >this is a testing site</Text>
        </Flex>
    </>
}