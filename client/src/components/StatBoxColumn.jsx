import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import StatBox from './StatBox';
import IconRenderer from '../utils/IconRenderer';

const StatBoxColumn = ({ title, content, color, subtitle = 'Today', span = 'span 2' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={span}
      backgroundColor={colors.primary[400]}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <StatBox title={title} subtitle={subtitle} content={content} color={color} />
    </Box>
  );
};

export default StatBoxColumn;
