import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
} from "@mantine/core";

const getChild = (height) => (
  <Skeleton height={height} radius='md' animate={true} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my='md'>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, theme.spacing.md))}
          {getChild(getSubHeight(2, theme.spacing.md))}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  );
}
