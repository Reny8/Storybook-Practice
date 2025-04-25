import NavBar from "./nav-bar";

export default {
  title: "Common/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "The background color of the button",
      table: {
        defaultValue: { summary: "black" },
      },
    },
    title: {
      description: "App Title",
      table: {
        defaultValue: { summary: "My App" },
      },
    },
    links: {
      control: "none",
      description: "Array of links to be displayed in the navbar",
      table: {
        defaultValue: {
          summary:
            '[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]',
        },
      },
    },
  },
};

export const Template = {
  args: {
    title: "My App",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
    ],
    backgroundColor: "#2e3841",
  },
};
