import { useGlobal } from '../../hooks/useGlobal';
import React from 'react';

const TitleBar = ({ data, bottomRounded }) => {
  const { titleBarStyles } = useGlobal();
  const StyledTitleBar = titleBarStyles;

  return (
    <StyledTitleBar>
      {data.map((box: any, index: number) => (
        <div className="title-box" key={index}>
          <div
            className={`title-box-heading ${index === 0 ? 'borderRadiusTopLeft' : ''} ${
              index === data.length - 1 ? 'borderRadiusTopRight' : ''
            }`}
          >
            <h1>{box.title}</h1>
          </div>
          <div
            className="title-box-value"
            style={{
              borderBottomLeftRadius: bottomRounded ? (index === 0 ? '20px' : 0) : 0,
              borderBottomRightRadius: bottomRounded
                ? index === data.length - 1
                  ? '20px'
                  : ''
                : 0,
            }}
          >
            <h1>{box.value}</h1>
          </div>
        </div>
      ))}
    </StyledTitleBar>
  );
};

export default TitleBar;
