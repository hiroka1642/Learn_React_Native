import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../App";

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
  const [userData, setUserData] = useState<UserData[]>();
  const [refreshing, setRefreshing] = useState(false);

  const callUserDataApi = useCallback(async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const users = await res.json();

    if (!res.ok) {
      throw new Error(`Network response was not OK :${res.statusText}`);
    }

    if (res.ok) {
      const userData = users.results.map((data: any) => {
        return {
          name: data.name.first,
          thumbnailUrl: data.picture.thumbnail,
          email: data.email,
          age: data.dob.age,
          pictureUrl: data.picture.large,
        };
      });
      setUserData(userData);
    }
  }, [setUserData]);

  const refresh = useCallback(() => {
    async () => {
      setRefreshing(true);
      await callUserDataApi();
      setRefreshing(false);
    };
  }, []);

  useEffect(() => {
    callUserDataApi();
  }, []);

  if (userData === undefined) {
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

  const onPressUserDetails = (data: any) => {
    navigation.navigate("UserDetailsScreen", { userdata: data });
  };

  return (
    //ScrollViewの中にFlatListはおかない
    <FlatList
      contentContainerStyle={styles.contentContainer}
      refreshing={refreshing}
      onRefresh={refresh}
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
              style={{ width: 40, height: 40 }}
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
    height: 44,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
