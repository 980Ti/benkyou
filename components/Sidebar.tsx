import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { HiOutlineViewList } from 'react-icons/hi';
import SidebarButton, { SidebarLinkButton } from './SidebarButton';
import { lighten } from 'polished';
import HiraganaIcon from '../public/images/hiragana_icon.svg';
import KatakanaIcon from '../public/images/katakana_icon.svg';

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState<Boolean>(false);

  const changeSidebar = () => setOpen(!open);

  const navgiationList = [
    {
      title: '히라가나',
      href: '/hiragana',
      icon: () => <HiraganaIcon />,
    },
    {
      title: '가타카나',
      href: '/katakana',
      icon: () => <KatakanaIcon />,
    },
  ];

  return (
    <StyledSidebar open={open}>
      <SidebarButton
        clickEvent={changeSidebar}
        Icon={() => <HiOutlineViewList />}
        title="Benkyou"
        css={css`
          margin-top: 30px;
          background: #3a3c3b;

          .sidebar-button-text {
            position: relative;
            top: -1px;
          }

          &:hover {
            background: ${lighten(0.05, '#3A3C3B')};
          }
        `}
      />
      <Navigation>
        <ul>
          {navgiationList.map(({ title, href, icon }, index) => (
            <li key={title}>
              <SidebarLinkButton
                href={href}
                Icon={icon}
                title={title}
                css={css`
                  margin-top: ${index === 0 ? '35px' : '10px'};
                  ${router.pathname === href && 'background: #343635;'}
                `}
              />
            </li>
          ))}
        </ul>
      </Navigation>
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.div<{ open: Boolean }>`
  width: ${(props) => (props.open ? '240px' : '80px')};
  height: 100vh;
  background: #232625;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 1s;
  transition-timing-function: cubic-bezier(0.17, 0.01, 0, 0.97);

  ${(props) =>
    props.open &&
    `
    > button, a {
      width: 200px;
      border-radius: 7px;
    }
  `}
`;

const Navigation = styled.nav``;
