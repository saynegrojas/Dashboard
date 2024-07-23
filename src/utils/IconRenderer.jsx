import { tokens } from '../theme';
import { useTheme } from '@mui/material/styles';
import {
  Email as EmailIcon,
  PointOfSale as PointOfSaleIcon,
  Traffic as TrafficIcon,
  Person as PersonAddIcon,
} from '@mui/icons-material';

const IconRenderer = ({ iconName }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getIconType = (iconName) => {
    const iconNameMap = {
      Email: <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      PointOfSale: <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      Traffic: <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
      PersonAdd: <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />,
    };
    return iconNameMap[iconName] || null;
  };

  return getIconType(iconName);
};

export default IconRenderer;
