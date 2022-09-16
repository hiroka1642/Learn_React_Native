import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "UserListScreen">;

/** @package */
export const UserListScreen = ({ navigation }: Props) => {
  return (
    //ScrollViewの中にFlatListはおかない
    <View style={styles.container}>
      <FlatList
        data={[
          {
            name: "Devin",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Dan",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Dominic",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Jackson",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "James",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Joel",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "John",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Jillian",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Jimmy",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
          {
            name: "Julie",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
        ]}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
