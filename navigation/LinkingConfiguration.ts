import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          BarChart: {
            screens: {
              BarChartScreen: 'bar',
            },
          },
          LineChart: {
            screens: {
              LineChartScreen: 'line',
            },
          },
          PieChart: {
            screens: {
              PieChartScreen: 'pie',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
