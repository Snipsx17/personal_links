import { NavbarProps } from "./Navbar.types"

export const Navbar = (props: NavbarProps) => {
  const { user } = props;
  return (
    <>
      <h2>{user}</h2>
    </>
  );
}

