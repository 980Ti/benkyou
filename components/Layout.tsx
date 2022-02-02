import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledComponent>{children}</StyledComponent>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
`;

const StyledComponent = styled.div`
  flex: 1;
`;
