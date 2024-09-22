import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";

type CustomLinkProps = {
  to: "/" | "/home" | "/services" | "/habitats" | "/contact";
  children: ReactNode;
};

export default function CustomNavLink({ to, children }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <CustomNavLinkStyled className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </CustomNavLinkStyled>
  );
}

const CustomNavLinkStyled = styled.li`
  > a {
    text-decoration: none;
    color: ${theme.colors.white};

    &:visited {
      color: none;
    }
  }

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.7rem;
  }

  &:not(.active) {
    position: relative;

    > a::before {
      position: absolute;
      content: "";
      top: 90%;
      left: 0;
      width: 0%;
      height: 2px;
      background: white;
      transition: 0.4s;
    }

    > a:hover::before {
      width: 100%;
    }
  }
`;
