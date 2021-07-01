import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: StatusBar.currentHeight,
    paddingHorizontal: "5%",
  },

  logout: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },

  user: {
    width: 50,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 25,
  },
});
