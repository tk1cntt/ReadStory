import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
import {scale, scaleModerate, scaleVertical} from '../../Lib/scale';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: "#FFF",
  },
  logo: {
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 10
  },
})
