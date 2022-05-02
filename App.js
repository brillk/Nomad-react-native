import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}
//flexbox로 부모를 만들고 자식들에게 비율을 조정할수 있다


//모든 텍스트는 TEXT안에 들어가야 된다 웹이 아니기 때문에
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "tomato",
  },
});

//View 의 기본값은 flex, flex-direction은 column이다
