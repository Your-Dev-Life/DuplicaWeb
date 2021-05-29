import { grommet, ThemeType } from 'grommet';
import { deepMerge } from 'grommet/utils';
import global from './styles/global';

const Theme: ThemeType = {
  ...deepMerge(grommet, {
    global,
  }),
};

export default Theme;
