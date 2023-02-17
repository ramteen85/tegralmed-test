import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './components/Container/Container';
import GlobalStyles from './components/styled/Global';
import TitleBar from './components/TitleBar/TitleBar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import GoogleMap from './components/GoogleMap/GoogleMap';
import ControlPanel from './components/ControlPanel/ControlPanel';
import { useGlobal } from './hooks/useGlobal';

function App() {
  const { appStyles } = useGlobal();
  const StyledApp = appStyles;

  const {
    setOnlyFirst,
    onlyFirst,
    customStylesLeft,
    customStylesRight,
    topLeftTitlebarStyles,
    topRightTitlebarStyles,
    controlPanelContainerStyles,
    topRightContainerWrapperStyles,
    data,
  } = useGlobal();

  const toggleFirstColumn = () => {
    setOnlyFirst(!onlyFirst);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={data.theme}>
        <GlobalStyles />
        <StyledApp>
          <Container customStyles={customStylesLeft} onClick={toggleFirstColumn}>
            <span style={{ cursor: 'pointer' }}>
              <TitleBar data={data.titleBarData} bottomRounded={false} />
              <ProgressBar progress={data.progressBar} />
            </span>
            <GoogleMap title={'Area Map'} />
          </Container>

          <Container customStyles={customStylesRight}>
            <div style={topRightContainerWrapperStyles}>
              <Container customStyles={topLeftTitlebarStyles}>
                <TitleBar
                  data={[{ title: 'Site Locations', value: 2353 }]}
                  bottomRounded={true}
                />
              </Container>
              <Container customStyles={topRightTitlebarStyles}>
                <TitleBar
                  data={[{ title: 'Total Registered Assets', value: 10309 }]}
                  bottomRounded={true}
                />
              </Container>
            </div>
            <Container customStyles={controlPanelContainerStyles}>
              <ControlPanel />
            </Container>
          </Container>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
