import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { ExtendTheme, useTheme } from "@react-navigation/native";
import { DeviceInfo } from "~/utils";
import { ActivityIndicator } from "react-native-paper";

interface Props {}
const LoadingView: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          size="small"
          color={theme.colors.indicator}
          animating={true}
        />
      </View>
    </View>
  );
};
export default React.memo(LoadingView);

const createStyles = (theme: ExtendTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      backgroundColor: theme.colors.backgroundOpacityPopup,
      width: DeviceInfo.width,
      height: DeviceInfo.height,
    },
    activityIndicatorWrapper: {
      backgroundColor: theme.colors.background,
      height: 80,
      width: 80,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      alignSelf: "center",
    },
  });
