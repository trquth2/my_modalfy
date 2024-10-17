import {ViewStyle} from 'react-native';
import {ScreenInfo} from '~/utils';

interface IPlaceHolder {
  viewContain: ViewStyle;
  viewItemProject: ViewStyle;
  viewItemGridImage: ViewStyle;
  [key: string]: any;
}
const MARGIN_HORIZONTAL = 16;
const ITEM_WIDTH = (ScreenInfo.width - (3 - 1)) / 3;
export const ITEM_WIDTH_CAMERA_ROLL = (ScreenInfo.width - (4 - 1)) / 4;

const styles: IPlaceHolder = {
  gridImageCamera: {
    width: ITEM_WIDTH_CAMERA_ROLL,
    height: ITEM_WIDTH_CAMERA_ROLL,
    marginRight: 1,
    marginBottom: 1,
  },
  gridImage: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginRight: 1,
    marginBottom: 1,
  },
  viewItemProject: {
    marginVertical: MARGIN_HORIZONTAL,
  },
  viewContain: {
    flex: 1,
    marginHorizontal: MARGIN_HORIZONTAL,
  },
  viewItemGridImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -16,
  },
};
export default styles;
