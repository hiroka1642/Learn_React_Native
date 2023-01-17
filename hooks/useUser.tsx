import { useCallback, useEffect, useState } from "react";
import { UserData } from "../screens";

const FIRST_PAGE_INDEX = 0;

export const useUser = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [pageIndex, setPageIndex] = useState(FIRST_PAGE_INDEX);

  const callUserData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `https://randomuser.me/api/?page=${pageIndex}&results=20`
    );
    const users = await res.json();

    if (!res.ok) {
      setError(true);
      setLoading(false);
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
      setUserData((data) => data.concat(userData));
      setLoading(false);
    }
  }, [pageIndex]);

  const reCallUserData = useCallback(() => {
    if (!isloading) setPageIndex((index) => index + 1);
  }, [isloading]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    setUserData([]);
    await callUserData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    callUserData();
  }, [pageIndex]);

  return {
    userData,
    isloading,
    error,
    refresh,
    reCallUserData,
    refreshing,
  };
};
