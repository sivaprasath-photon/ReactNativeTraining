import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name , index}) => (
  <View style={[styles.container,{flexDirection:positionRow[index]}]} key={name}>
    <Image source={{uri:profileImage}} style={{ width: 50, height: 50,borderRadius:25 }} />
    <Text style={{marginLeft:10}}>{name}</Text>
  </View>
);

const positionRow = ['row','row-reverse'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
}
});

export default ContactListItem;