import { StyleSheet, FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/dummy-data";
import React, { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const data = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...data} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
