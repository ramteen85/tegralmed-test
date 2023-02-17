import { useGlobal } from '../../hooks/useGlobal';
import React from 'react';

interface ContainerProps {
  customStyles?: string;
  onClick?: any;
  children: any;
}

const Container = ({
  children,
  customStyles = '',
  onClick = () => {},
}: ContainerProps) => {
  const { containerStyles } = useGlobal();
  const StyledContainer = containerStyles;

  return (
    <StyledContainer onClick={onClick} customStyles={customStyles}>
      {children}
    </StyledContainer>
  );
};

export default Container;
