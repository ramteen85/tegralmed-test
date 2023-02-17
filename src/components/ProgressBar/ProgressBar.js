import React from 'react';
import { useGlobal } from '../../hooks/useGlobal';

const ProgressBar = ({ progress }) => {
  const { progressBarStyles } = useGlobal();
  const StyledProgressBar = progressBarStyles(progress);

  return (
    <StyledProgressBar progress={progress}>
      <div className="orange-slider"></div>
      <div className="text-container">
        <span>{progress}% Overhaul Recommended</span>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
