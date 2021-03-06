import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  selectButton: {
    width: "100%",
    height: 50,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  selectModal: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "#DF6666",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "7%",
    right: "2%",
    borderRadius: 25,
    zIndex: 2,
  },

  selectModalContent: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "80%",
    padding: 10,
  },
});
