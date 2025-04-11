import ButtonCounter from "./button-counter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
};

// Story where the button size is large

export const Large = {
  args: {
    size: "lg",
    label: "Click me",
    onClick: () => {},
  },
};

export const Medium = {
  args: {
    size: "md",
    label: "Click me",
    onClick: () => {},
  },
};

export const Small = {
  args: {
    size: "sm",
    label: "Click me",
    onClick: () => {},
  },
};
