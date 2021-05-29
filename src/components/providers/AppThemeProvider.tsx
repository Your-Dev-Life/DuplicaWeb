import React from 'react';
import { Grommet, ThemeType } from 'grommet';
import customTheme from 'app/theme/custom';

interface Props {
  theme?: ThemeType;
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<Props> = ({ theme, children }) => (
  <Grommet theme={theme} plain>
    {children}
  </Grommet>
);

AppThemeProvider.defaultProps = {
  theme: customTheme,
};

export default AppThemeProvider;
