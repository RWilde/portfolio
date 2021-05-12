import React from "react";
import { LinkItem, LinkTag } from "./styles";

type NavLinkProps = {
  title: string;
  linkTag: string;
};

const NavLink = ({ title, linkTag }: NavLinkProps) => {
  return (
    <LinkItem>
      <LinkTag>{title}</LinkTag>
    </LinkItem>
  );
};

export default NavLink;
