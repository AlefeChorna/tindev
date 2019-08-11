import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30
  },
  logoButton: {
    flex: 1,
    minHeight: 60,
    maxHeight: 70,
    justifyContent: "center"
  },
  cardsContainer: {
    flex: 1,
    alignSelf: "stretch",
    minHeight: 425
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    marginHorizontal: 30,
    marginVertical: 15,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  avatar: {
    width: 300,
    height: 300,
    backgroundColor: "#F3F3F3"
  },
  footer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  bio: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
    lineHeight: 18
  },
  buttonsContainer: {
    flex: 1,
    minHeight: 75,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  empty: {
    marginTop: 200,
    alignSelf: "center",
    color: "#999",
    fontSize: 24,
    fontWeight: "bold"
  },
  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  matchImage: {
    height: 60,
    resizeMode: "contain"
  },
  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "#FFF",
    backgroundColor: "#FDFDFD",
    marginVertical: 30,
  },
  matchName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF"
  },
  matchBio: {
    marginTop: 10,
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 30
  },
  closeMatch: {
    fontSize: 18,
    color: "#DF4723",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold"
  }
});

export default styles;
