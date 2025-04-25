interface NavBarProps {
  title: string;
  links: Array<{ name: string; href: string }>;
  backgroundColor: string;
}

const NavBar = ({ title, links, backgroundColor }: NavBarProps) => {
  return (
    <nav className="p-4" style={{ backgroundColor }}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">{title}</div>
        <div className="flex items-center justify-between gap-4">
          {links &&
            links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
