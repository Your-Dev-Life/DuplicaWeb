import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessIcon from '@material-ui/icons/Business';

const menu = [
  {
    name: 'Settings',
    icon: SettingsIcon,
    menus: [
      {
        name: 'Factory',
        to: '/factory',
        icon: LocationCityIcon
      },
      {
        name: 'Company',
        to: '/company',
        icon: BusinessIcon
      }
    ]
  },
  {
    name: 'Finances',
    icon: AccountBalanceIcon,
    menus: [
      {
        name: 'Menu 1',
        to: '',
        icon: AccountBalanceIcon
      }
    ]
  }
];

export default menu;
