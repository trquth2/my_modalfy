import {StyleProp, StyleSheet, View, ViewProps} from 'react-native';
import {ExtendTheme, useTheme} from '@react-navigation/native';
import React, {FC, memo, useMemo} from 'react';
import {WText} from '../text';
import Timeline from 'react-native-timeline-flatlist';

interface Props {
  style?: StyleProp<ViewProps>;
  data: any[];
}

export const WTimeLine: FC<Props> = memo(({style, data}) => {
  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);
  const renderDetail = (rowData: any) => {
    return (
      <View style={styles.row}>
        <WText text={rowData.title} />
        <WText text={rowData.description} bold />
      </View>
    );
  };
  return data ? (
    <View style={[styles.container, style]}>
      <Timeline
        style={styles.content}
        data={data}
        circleSize={10}
        circleColor={theme.colors.darkerGray}
        lineColor={theme.colors.darkerGray}
        showTime={false}
        innerCircle={'none'}
        renderDetail={renderDetail}
        isUsingFlatlist={false}
        circleStyle={styles.circleStyle}
        eventContainerStyle={styles.eventStyle}
      />
    </View>
  ) : null;
});

const makeStyle = (_: ExtendTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    content: {flex: 1},
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -14,
    },
    circleStyle: {marginLeft: 0, paddingLeft: 0},
    eventStyle: {
      marginLeft: 10,
    },
  });
