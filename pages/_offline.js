import { useState } from "react";
import { Button, Text } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

export default function OfflinePage() {
  const [isAnimating, setIsAnimating] = useState(true);
  const theme = useMantineTheme();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.gray[1],
      }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundImage: `linear-gradient(to bottom, ${theme.colors.blue[5]}, ${theme.colors.blue[7]})`,
            opacity: isAnimating ? 0.5 : 1,
            transition: "opacity 1s ease-in-out",
          }}
          onAnimationEnd={() => setIsAnimating(false)}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundImage: `url('/offline-bg.gif')`,
            backgroundSize: "cover",
            opacity: isAnimating ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            visibility: isAnimating ? "visible" : "hidden",
          }}
          onAnimationEnd={() => setIsAnimating(true)}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Text
          size='xl'
          weight={700}
          style={{ marginBottom: theme.spacing.xl }}>
          You're offline...
        </Text>
        <Button
          variant='outline'
          color='blue'
          onClick={() => window.location.reload()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
