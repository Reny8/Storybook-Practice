import ButtonCounter from "./button-counter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "The background color of the button",
      table: {
        defaultValue: { summary: "black" },
      },
    },
    size: {
      description: "The size of the button",
      table: {
        defaultValue: { summary: "sm" },
      },
    },
    label: {
      description: "The label of the button",
      table: {
        defaultValue: { summary: "Click me" },
      },
    },
    onClick: {
      description: "The function to be called when the button is clicked",
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
