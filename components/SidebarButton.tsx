import React from 'react';
import styled, { CSSProp, css } from 'styled-components';
import Link from 'next/link';

type SidebarButtonType = {
  clickEvent: () => void;
  Icon: () => JSX.Element;
  title: string;
  css?: CSSProp;
};

type SidebarLinkButtonType = {
  href: string;
  Icon: () => JSX.Element;
  title: string;
  css?: CSSProp;
};

export const SidebarLinkButton = ({
  href,
  Icon,
  title,
  css,
}: SidebarLinkButtonType) => (
  <Link href={href} passHref>
    <StyledSidebarLinkButton customStyle={css}>
      <div className="sidebar-button-icon">
        <Icon />
      </div>
      <div className="sidebar-button-text">{title}</div>
    </StyledSidebarLinkButton>
  </Link>
);

const SidebarButton = ({ clickEvent, Icon, title, css }: SidebarButtonType) => (
  <StyledSidebarButton onClick={clickEvent} customStyle={css}>
    <div className="sidebar-button-icon">
      <Icon />
    </div>
    <div className="sidebar-button-text">{title}</div>
  </StyledSidebarButton>
);

export default SidebarButton;

const SidebarButtonCss = css`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  transition: all 1s;
  transition-timing-function: cubic-bezier(0.17, 0.01, 0, 0.97);
  overflow: hidden;

  .sidebar-button-icon {
    margin: 0 10px;
    flex: 0 0 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-button-text {
    white-space: nowrap;
    font-size: 15px;
  }

  svg {
    font-size: 30px;
    fill: white;
  }
`;

const StyledSidebarButton = styled.button<{ customStyle: CSSProp | undefined }>`
  ${SidebarButtonCss}
  ${(props) => props.customStyle}
`;

const StyledSidebarLinkButton = styled.a<{ customStyle: CSSProp | undefined }>`
  ${SidebarButtonCss}
  ${(props) => props.customStyle}
`;
