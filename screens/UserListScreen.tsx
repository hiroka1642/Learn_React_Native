import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import { useUser } from "../hooks/useUser";

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
  const [refreshing, setRefreshing] = useState(false);

  const { userData, isloading, error, refresh } = useUser();

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  if (isloading) {
    return (
      <View>
        <Text>ローディング中</Text>
      </View>
    );
  }

  if (userData.length === 0) {
    return (
      <View>
        <Text>データが見つかりませんでした</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>エラーが発生しました</Text>
      </View>
    );
  }

  const onPressUserDetails = (data: any) => {
    navigation.navigate("UserDetailsScreen", { userData: data });
  };

  return (
    //ScrollViewの中にFlatListはおかない
    <FlatList
      contentContainerStyle={styles.contentContainer}
      refreshing={refreshing}
      onRefresh={onRefresh}
      data={userData}
      renderItem={({ item }) => (
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
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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
