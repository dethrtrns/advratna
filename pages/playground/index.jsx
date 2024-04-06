import { Flex, Text } from '@mantine/core'
import Layout from '../../components/layout/Layout'

export default function Playground() {
    return <>
        <Flex sx={{
            // zIndex: 50,
        }} w={'100dvw'} mih={'100dvh'} bg={'gray'} justify={'start'} align={'start'} >

        <Layout />
        </Flex>
    </>
}