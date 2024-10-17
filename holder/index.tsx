import React, {memo} from 'react';
import {DimensionValue, StyleProp, View, ViewStyle} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import styles from './styles';
import {ScreenInfo} from '~/utils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SizeBox from '../SizeBox';

export const WPlaceholderItem = memo(
  ({
    height = 40,
    width = '100%',
    radius = 2,
    style,
  }: {
    height?: number;
    width?: DimensionValue;
    radius?: number | undefined;
    style?: StyleProp<ViewStyle>;
  }) => {
    return (
      <View style={style}>
        <SkeletonPlaceholder speed={2000}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            style={{}}
          >
            <SkeletonPlaceholder.Item
              borderRadius={radius}
              style={{}}
              height={height}
              width={width}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  },
);

export const WPlaceholderLine = memo(
  ({
    height = 40,
    width = '100%',
    style,
  }: {
    height?: number;
    width?: DimensionValue;
    style?: StyleProp<ViewStyle>;
  }) => {
    return (
      <View style={style}>
        <SkeletonPlaceholder borderRadius={2} speed={2000}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            style={{}}
          >
            <SkeletonPlaceholder.Item
              borderRadius={5}
              style={{}}
              height={height}
              width={width}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  },
);

export const WPlaceholderRow = memo(
  ({height = 40, style}: {height?: number; style?: StyleProp<ViewStyle>}) => {
    return (
      <View style={style}>
        <SkeletonPlaceholder borderRadius={2} speed={2000}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            style={{}}
          >
            <SkeletonPlaceholder.Item
              width={height}
              height={height}
              borderRadius={5}
              style={{}}
            />
            <SizeBox width={10} />
            <SkeletonPlaceholder.Item
              borderRadius={5}
              style={{}}
              height={height}
              width={'100%'}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  },
);

export const ItemPlaceHolderTask = () => {
  return (
    <Placeholder
      style={styles.viewItemProject}
      Left={PlaceholderMedia}
      Animation={Fade}
    >
      <PlaceholderLine />
      <PlaceholderLine />
      <PlaceholderLine />
    </Placeholder>
  );
};
export const PlaceHolderTask = () => {
  return (
    <View style={styles.viewContain}>
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
      <ItemPlaceHolderTask />
    </View>
  );
};
export const ItemPlaceHolderEvent = () => {
  return (
    <Placeholder style={styles.viewItemProject} Animation={Fade}>
      <PlaceholderLine />
      <PlaceholderLine />
      <PlaceholderLine />
    </Placeholder>
  );
};

const ITEM_WIDTH = (ScreenInfo.width - (3 - 1)) / 3;

const ItemPlaceHGridImage = () => {
  return (
    <View style={styles.viewItemGridImage}>
      <View style={styles.gridImage}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={{width: ITEM_WIDTH, height: ITEM_WIDTH}} />
        </Placeholder>
      </View>
      <View style={styles.gridImage}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={{width: ITEM_WIDTH, height: ITEM_WIDTH}} />
        </Placeholder>
      </View>
      <View style={styles.gridImage}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={{width: ITEM_WIDTH, height: ITEM_WIDTH}} />
        </Placeholder>
      </View>
    </View>
  );
};

export const PlaceHolderGridImage = () => {
  return (
    <View style={styles.viewContain}>
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
      <ItemPlaceHGridImage />
    </View>
  );
};

export const WCirclePlaceholder = memo(
  ({radius = 30, style}: {radius: number; style?: StyleProp<ViewStyle>}) => {
    return (
      <View style={style}>
        <SkeletonPlaceholder speed={2000}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            style={{}}
          >
            <SkeletonPlaceholder.Item
              borderRadius={radius}
              style={{}}
              height={radius * 2}
              width={radius * 2}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  },
);
