import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

/** @package */
export const UserListScreen = () => {
  const [userData, setUserData] =
    useState<
      { name: string; thumbnail: string; email: string; age: string }[]
    >();

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
          thumbnail: data.picture.thumbnail,
          email: data.email,
          age: data.dob.age,
        };
      });
      setUserData(userData);
    }
  }, [setUserData]);

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

  if (userData === []) {
    return (
      <View>
        <Text>データが見つかりませんでした</Text>
      </View>
    );
  }

  return (
    //ScrollViewの中にFlatListはおかない
    <View style={styles.container}>
      <FlatList
        data={userData}
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
