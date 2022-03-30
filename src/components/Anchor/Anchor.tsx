import React from "react";
import { ReactNode } from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";

const SAnchor = styled.a`
  color: inherit;
  height: fit-content;
  text-decoration: none;
  width: fit-content;

  :visited,
  :hover,
  :active {
    color: inherit;
  }

  > * {
    color: inherit;
  }
`;

type AnchorProps = {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const Anchor = ({ href, target, children }: AnchorProps) => {
  return (
    <Link to={href}>
      <SAnchor href={href} target={target}>
        {children}
      </SAnchor>
    </Link>
  );
}
