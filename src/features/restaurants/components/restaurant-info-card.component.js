import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Crust",
    icon,
    photos = [
      "https://lh3.googleusercontent.com/p/AF1QipMI0PqDanOx-VmUbRtaBOeNEIxIZUoKrRqsuGE=w573-h573-p-no",
    ],
    address = "Hamdi Sina Liqeni i thate Tirane, 1044",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
