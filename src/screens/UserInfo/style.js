import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: "center",
  },

  userImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  name: { fontSize: 35, fontWeight: "bold", marginTop: 20 },

  balanceContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  balance: {
    width: "50%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
  },

  eyeSvgIcon: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  textContainer: { width: "70%", marginTop: 15 },

  title: { fontSize: 25, fontWeight: "bold" },
});
