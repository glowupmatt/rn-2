import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
const MealsDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.filter((meal) => meal.id === mealId)[0];
  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({});
