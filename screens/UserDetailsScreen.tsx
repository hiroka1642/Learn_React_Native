import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "UserDetailsScreen">;

/** @package */
export const UserDetailsScreen = (props: Props) => {
  if (!props) {
    return (
      <View>
        <Text>データが見つかりませんでした</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.route.params.userdata?.pictureUrl }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.userDetails}>
        <View style={styles.userdata}>
          <Text style={styles.label}>name:</Text>
          <Text style={styles.text}>{props.route.params.userdata?.name}</Text>
        </View>
        <View style={styles.userdata}>
          <Text style={styles.label}>email:</Text>
          <Text style={styles.text}>
            email:{props.route?.params?.userdata?.email}
          </Text>
        </View>
        <View style={styles.userdata}>
          <Text style={styles.label}>age:</Text>
          <Text style={styles.text}>
            age:{props.route.params.userdata?.age}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    maxWidth: 300,
  },
  userdata: {
    margin: 3,
  },
  label: { fontSize: 16 },
  text: {
    fontSize: 16,
  },
});
