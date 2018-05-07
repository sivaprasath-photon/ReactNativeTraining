import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ContactList from "./ContactList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  dec() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    const { container, label, result } = styles;
    return (
      <View style={container}>
        {/*
      <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 40, height: 40}} />
        <Text style={label} onPress={this.inc}>INC</Text>
        <Text style={[result,{alignSelf:'flex-end'}]}>{this.state.counter}</Text>
        <Text style={label} onPress={this.dec}>DEC</Text>
      */}
        <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center"
  },
  label: {
    fontSize: 32,
    color: "purple"
  },
  result: {
    fontSize: 64,
    color: "red"
  }
});

