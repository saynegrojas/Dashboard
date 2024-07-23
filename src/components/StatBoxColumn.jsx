import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import StatBox from './StatBox';
import IconRenderer from '../utils/IconRenderer';

const StatBoxColumn = ({ title, subtitle, iconName, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn='span 3'
      backgroundColor={colors.primary[400]}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={<IconRenderer iconName={iconName} />}
      />
    </Box>
  );
};

export default StatBoxColumn;
