import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonHomelistContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#333",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
    height: "80%",
    marginLeft: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 10,
    flex: 1,
  },

  subtitle: { fontSize: 18, color: "#fff", paddingLeft: 10 },

  typeContainer: {
    backgroundColor: "#494848",
    marginTop: 2,
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },

  typeText: { fontSize: 18, color: "#fff" },
});
