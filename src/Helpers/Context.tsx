import { createContext, useState } from 'react';
import {
  DisplayFill,
  ExclamationSquare,
  GraphUpArrow,
  ListColumnsReverse,
  Map,
  PersonBoundingBox,
  PersonCircle,
  PersonWorkspace,
  Signpost2,
  StackOverflow,
  UpcScan,
} from 'react-bootstrap-icons';
import styled from 'styled-components';

const initialValues = {
  onlyFirst: false,
  setOnlyFirst: (value) => {},
  customStylesLeft: '',
  customStylesRight: '',
  topLeftTitlebarStyles: '',
  topRightTitlebarStyles: '',
  controlPanelStyles: styled.div``,
  appStyles: styled.div``,
  googleMapStyles: styled.div``,
  progressBarStyles: (progress) => {},
  titleBarStyles: styled.div``,
  controlPanelItemStyles: styled.div<{ customStyles: string }>``,
  containerStyles: styled.div<{ customStyles: string }>``,
  controlPanelContainerStyles: '',
  topRightContainerWrapperStyles: {},
  data: {
    theme: {},
    titleBarData: {},
    controlPanelData: [
      {
        title: 'Assets by States',
        icon: <Map />,
      },
    ],
    progressBar: 0,
  },
};

export const GlobalDataContext = createContext(initialValues);

export const GlobalDataContextProvider = (props) => {
  const [onlyFirst, setOnlyFirst] = useState(false);

  const topRightContainerWrapperStyles = {
    display: 'flex',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  };

  const googleMapStyles = styled.div`
    height: 78vh;
    iframe {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  `;

  const controlPanelContainerStyles = `
    padding-right: 10px; 
    @media screen and (max-width: 1230px) { 
        padding-right: 0; 
    }
  `;

  const customStylesLeft = `
  flex: 7;
  height: 100vh;
  margin-right: 10px;

  @media screen and (max-width: 1230px) {
    margin-right: 0px;
  }

  `;
  const customStylesRight = `
  flex: 5;
  height: 100vh;
  min-width: 300px;

  ${onlyFirst ? 'display: none;' : ''}

`;

  const topLeftTitlebarStyles = `
  display: flex;
  flex: 1;
  margin-right: 10px;

  @media screen and (max-width: 420px) {
    margin-right: 0px;
  }

`;
  const topRightTitlebarStyles = `
  display: flex;
  flex: 1;
  margin-right: 10px;

  @media screen and (max-width: 1170px) {
    margin-right: 0px;
  }

`;

  const titleBarStyles = styled.div`
    margin-top: 5px;
    display: flex;
    width: 100%;
    border-radius: 10%;
    flex-wrap: wrap;

    .title-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title-box-heading {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px;
      color: ${({ theme }) => theme.tegralMed.colours.white};
      background: ${({ theme }) => theme.tegralMed.colours.darkGreen};

      h1 {
        font-size: 1rem;
      }

      @media screen and (max-width: 420px) {
        h1 {
          min-width: 11rem;
        }
      }
    }

    .borderRadiusTopRight {
      border-top-right-radius: 20px;
    }

    .borderRadiusTopLeft {
      border-top-left-radius: 20px;
    }

    @media screen and (max-width: 535px) {
      .borderRadiusTopRight {
        border-top-right-radius: 0 !important;
      }
      .borderRadiusTopLeft {
        border-top-left-radius: 0 !important;
      }
    }

    .title-box-value {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.tegralMed.colours.darkGreen};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
  `;

  const containerStyles = styled.div<{ customStyles: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    background: ${({ theme }) => theme.tegralMed.colours.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    ${(props) => props.customStyles}
  `;

  const controlPanelItemStyles = styled.div<{ customStyles: string }>`
    background-color: ${({ theme }) => theme.tegralMed.colours.grey};
    padding: 5px;
    min-width: 145px;
    max-width: 140px;
    margin-bottom: 10px;
    height: 200px;
    flex: 1;
    ${(props) => props.customStyles}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;

    .icon-container {
      color: ${({ theme }) => theme.tegralMed.colours.darkGreen};
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .title {
      text-align: center;
      color: ${({ theme }) => theme.tegralMed.colours.darkGreen};
      font-weight: bold;
      font-size: 1rem;
    }
  `;

  const controlPanelStyles = styled.div`
    margin-top: 5px;
    display: flex;
    width: 100%;
    width: 100%;
    border-radius: 10%;

    .title-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title-box-heading {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px;
      color: ${({ theme }) => theme.tegralMed.colours.white};
      background: ${({ theme }) => theme.tegralMed.colours.darkGreen};

      h1 {
        font-size: 1rem;
      }
    }

    .title-box-container {
      border: 1px solid ${({ theme }) => theme.tegralMed.colours.darkGreen};
      height: 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      display: flex;
      padding: 10px 10px 10px 16px;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
  `;

  const progressBarStyles = (progress) => styled.div`
    width: 100%;
    background: ${({ theme }) => theme.tegralMed.colours.grey};
    height: 80px;
    position: relative;

    .orange-slider {
      background: ${({ theme }) => theme.tegralMed.colours.orange};
      width: ${progress}%;
      height: 100%;
    }

    .text-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        letter-spacing: 2px;
        color: ${({ theme }) => theme.tegralMed.colours.fadedGreen};
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  `;

  const appStyles = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1230px) {
      flex-direction: column;
    }
  `;

  const data = {
    controlPanelData: [
      {
        title: 'Assets by States',
        icon: <Map />,
      },
      {
        title: 'Assets by Types',
        icon: <Signpost2 />,
      },
      {
        title: 'Maintenence Plan Status',
        icon: <DisplayFill />,
      },
      {
        title: 'Analysis',
        icon: <GraphUpArrow />,
      },
      {
        title: 'Assets Require Overhaul',
        icon: <StackOverflow />,
      },
      {
        title: 'Full Asset List',
        icon: <ListColumnsReverse />,
      },
      {
        title: 'Search by Customer',
        icon: <PersonBoundingBox />,
      },
      {
        title: 'Search by Barcode',
        icon: <UpcScan />,
      },
      {
        title: 'Model Analysis',
        icon: <PersonWorkspace />,
      },
      {
        title: 'Find Expert Technician',
        icon: <PersonCircle />,
      },
      {
        title: 'Failure Rate',
        icon: <ExclamationSquare />,
      },
    ],
    titleBarData: [
      {
        title: 'Pass',
        value: 9117,
      },
      {
        title: 'Fail',
        value: 300,
      },
      {
        title: 'Attention',
        value: 892,
      },
      {
        title: 'Overhaul',
        value: 1706,
      },
    ],
    progressBar: 14,
    theme: {
      tegralMed: {
        colours: {
          darkGreen: '#356859',
          lightGreen: '#499b7e',
          fadedGreen: '#82b0a1',
          white: '#ffffff',
          black: '#1b1b1c',
          grey: '#e6e6e6',
          orange: '#ea6d00',
        },
      },
    },
  };

  const setOnlyFirstHandler: any = (value) => {
    setOnlyFirst(value);
  };

  return (
    <GlobalDataContext.Provider
      value={{
        onlyFirst: onlyFirst,
        setOnlyFirst: setOnlyFirstHandler,
        topLeftTitlebarStyles,
        topRightTitlebarStyles,
        controlPanelItemStyles,
        customStylesRight,
        customStylesLeft,
        controlPanelContainerStyles,
        progressBarStyles,
        controlPanelStyles,
        topRightContainerWrapperStyles,
        titleBarStyles,
        containerStyles,
        appStyles,
        googleMapStyles,
        data,
      }}
    >
      {props.children}
    </GlobalDataContext.Provider>
  );
};
