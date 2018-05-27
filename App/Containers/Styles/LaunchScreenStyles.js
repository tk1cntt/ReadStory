import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  tabBar: {
    height: 54,
    paddingTop: 5,
    paddingBottom: 1,
    paddingHorizontal: 28,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    backgroundColor: Colors.darkPurple,
  },
  tabBarLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 9,
    letterSpacing: 0,
    color: Colors.snow,
  },
  card: {
    opacity: 1,
    backgroundColor: Colors.darkPurple,
  },
});
