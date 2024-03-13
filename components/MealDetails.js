import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({
  complexity,
  duration,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
