import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { mockPieData as data } from '../data/mockData';

const PieChart = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.grey[100], // Change the background color of the tooltip
            color: colors.primary[600], // Change the text color of the tooltip
          },
        },
      }}
      margin={
        !isDashboard
          ? { top: 40, right: 80, bottom: 80, left: 80 }
          : { top: 10, right: 110, bottom: 20, left: -20 }
      }
      innerRadius={0.8}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={1}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={!isDashboard ? true : false}
      enableArcLinkLabels={!isDashboard ? true : false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLinkLabelsDiagonalLength={20}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      arcLinkLabel={(d) => (isDashboard ? '' : d.label)}
      arcLabel={(d) => `${d.value} %`}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: !isDashboard ? 'bottom' : 'bottom-right',
          direction: !isDashboard ? 'row' : 'column',
          justify: false,
          translateX: !isDashboard ? 0 : 70,
          translateY: !isDashboard ? 70 : -20,
          itemsSpacing: !isDashboard ? 20 : 0,
          itemWidth: 100,
          itemHeight: !isDashboard ? 18 : 20,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: !isDashboard ? 18 : 10,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
