import { useGlobal } from '../../hooks/useGlobal';
import React from 'react';

interface ControlPanelProps {
  customStyles?: string;
  Icon?: any;
  title?: string;
}

const ControlPanelItem = ({
  customStyles = '',
  Icon = '',
  title = '',
}: ControlPanelProps) => {
  const { controlPanelItemStyles } = useGlobal();
  const StyledControlPanelItem = controlPanelItemStyles;

  return (
    <StyledControlPanelItem customStyles={customStyles}>
      <div className={'icon-container'}>{Icon}</div>
      <span className="title">{title}</span>
    </StyledControlPanelItem>
  );
};

export default ControlPanelItem;
