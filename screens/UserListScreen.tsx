import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import { useUserData } from "../hooks/useUser";

type Props = NativeStackScreenProps<RootStackParamList, "UserListScreen">;

export type UserData = {
  name: string;
  thumbnailUrl: string;
  email: string;
  age: string;
  pictureUrl: string;
};

/** @package */
export const UserListScreen = ({ navigation }: Props) => {
  const { userData, isloading, error, refresh, reCallUserData, refreshing } =
    useUserData();

  const onPressUserDetails = (data: any) => {
    navigation.navigate("UserDetailsScreen", { userData: data });
  };

  return (
    //ScrollViewの中にFlatListはおかない
    <FlatList
      contentContainerStyle={styles.contentContainer}
      refreshing={refreshing}
      onEndReached={() => reCallUserData()}
      onRefresh={refresh}
      ListFooterComponent={
        isloading && refreshing === false ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : null
      }
      data={userData}
      renderItem={({ item }) => (
        <>
          {!isloading && !refreshing && userData.length === 0 ? (
            <View>
              <Text>データが見つかりませんでした</Text>
            </View>
          ) : null}

          {error ? (
            <View>
              <Text>エラーが発生しました</Text>
            </View>
          ) : null}

          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={styles.item}
              onPress={() => onPressUserDetails(item)}
            >
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={{ width: 76, height: 76 }}
              />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 22,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
