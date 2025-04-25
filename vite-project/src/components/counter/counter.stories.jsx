import Counter from "./counter";

export default {
  title: "Counter/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    count: {
      description:
        "The current count value. This is controlled in this component.",
      table: {
        defaultValue: { summary: 0 },
      },
    },
    increment: {
      description: "Function to increment the count value.",
      action: "increment",
    },
    decrement: {
      description: "Function to decrement the count value.",
      action: "decrement",
    },
  },
};

export const Default = {
  render: () => <Counter />,
};
