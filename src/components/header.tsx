import React from 'react';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  background-color: #141517;
  width: 100vw;
  height: 80px;
`;

export default function Header() {
  return (
    <div>
      <WrapperHeader />
    </div>
  );
}
