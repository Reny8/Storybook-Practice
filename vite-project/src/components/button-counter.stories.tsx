import ButtonCounter from "./button-counter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  argTypes: {
    backgroundColor: {
      control: {
        type: "color",
      },
    },
  },
};

// Story where the button size is small
export const Small = {
  args: {
    size: "sm",
    label: "Click me",
    onClick: () => {},
  },
};

// Story where the button size is medium
export const Medium = {
  args: {
    size: "md",
    label: "Click me",
    onClick: () => {},
  },
};

// Story where the button size is large
export const Large = {
  args: {
    size: "lg",
    label: "Click me",
    onClick: () => {},
  },
};
