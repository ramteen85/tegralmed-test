import { useGlobal } from '../../hooks/useGlobal';
import React from 'react';
import ControlPanelItem from '../ControlPanelItem/ControlPanelItem';

const ControlPanel = () => {
  const { data, controlPanelStyles } = useGlobal();
  const StyledControlPanel = controlPanelStyles;

  return (
    <StyledControlPanel>
      <div className="title-box">
        <div
          className="title-box-heading"
          style={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        >
          <h1>Control Panel</h1>
        </div>
        <div className="title-box-container">
          {data.controlPanelData.map(({ icon, title }, index) => (
            <ControlPanelItem
              customStyles={'margin-right: 10px;'}
              Icon={icon}
              title={title}
              key={index}
            />
          ))}
        </div>
      </div>
    </StyledControlPanel>
  );
};

export default ControlPanel;
