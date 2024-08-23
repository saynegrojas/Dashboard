import { tokens } from '../theme';
import { useTheme } from '@mui/material/styles';
import {
  Email as EmailIcon,
  PointOfSale as PointOfSaleIcon,
  Traffic as TrafficIcon,
  Person as PersonAddIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon,
  Search as SearchIcon,
  NotificationAddOutlined as NotificationOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  AccountBoxOutlined as AccountBoxOutlinedIcon,
} from '@mui/icons-material';

const IconRenderer = ({ iconName, fontSize = '26px' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getIconType = (iconName) => {
    const iconNameMap = {
      Email: <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      PointOfSale: <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      Traffic: <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      PersonAdd: <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      Settings: <SettingsOutlinedIcon />,
      LightMode: <LightModeOutlinedIcon />,
      DarkMode: <DarkModeOutlinedIcon />,
      Search: <SearchIcon />,
      Person: <PersonOutlinedIcon />,
      Notification: <NotificationOutlinedIcon />,
      Logout: <LogoutOutlinedIcon />,
      Account: <AccountBoxOutlinedIcon />,
    };
    return iconNameMap[iconName] || null;
  };

  return getIconType(iconName);
};

export default IconRenderer;
