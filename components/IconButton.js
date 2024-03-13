import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, ({ pressed }) => pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
