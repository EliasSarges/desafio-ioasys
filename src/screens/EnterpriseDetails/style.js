import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  backgroundImage: {
    width: "100%",
    height: 250,
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    zIndex: 0,
  },

  backgroundImageDarker: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(65,65,65,0.4)",
    alignItems: "flex-end",
  },

  name: {
    fontSize: 20,
    color: "#fff",
    marginTop: 130,
    width: "100%",
    fontSize: 40,
    fontWeight: "bold",
    paddingLeft: 30,
    position: "absolute",
  },

  informationHeader: {
    width: "90%",
    height: 100,
    marginTop: 225,
    flexDirection: "row",
  },

  firstLetterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  firstLetter: {
    width: 100,
    height: 100,
    backgroundColor: "#333",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: "#A8A2A2",
    alignItems: "center",
  },

  firstLetterText: { color: "#fff", fontSize: 50, fontWeight: "bold" },

  socialContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  socialIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  facebook: {
    backgroundColor: "#4267B2",
  },

  twitter: {
    backgroundColor: "#1DA1F2",
  },

  linkedin: {
    backgroundColor: "#0072b1",
  },
});
