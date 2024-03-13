import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={() => {
          navigation.navigate("MealsDetail", {
            mealId: id,
          });
        }}
      >
        <View>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>
              {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
            </Text>
            <Text style={styles.detailItem}>
              {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
