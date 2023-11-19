import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { removeTodo } from "../redux/action";

import { addTodo } from "../redux/action";

const todoApp = ({ data, dispatch }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Nhâp dữ liệu :</Text>
      <TextInput
        style={{
          width: "80%",
          height: 30,
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 10,
          margin: 10,
        }}
        placeholder="Add Todo"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Add"
        onPress={() => {
          if (text !== "") dispatch(addTodo(text));
          setText("");
        }}
      />

      <FlatList
        style={{ top: 10 }}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
              marginBottom: 20,
              paddingBottom: 10,
              borderBottomWidth: 1,
            }}
          >
            <Text>{item}</Text>
            <TouchableOpacity
              style={{ backgroundColor: "#be2539", borderRadius: 2, width: 60 }}
              onPress={() => {
                dispatch(removeTodo(text));
              }}
            >
              <Text style={{ color: "#FFF" }}>REMOVE</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps, null)(todoApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // position: "relative",
    alignItems: "center",
    // justifyContent: "center",
    // width: "100%",
    // height: "100%",
    backgroundColor: "#FFFFFF",
  },
});
