import { useCallback, useEffect, useState } from "react";
import { UserData } from "../screens";

export const useUser = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [error, setError] = useState(false);

  const CallUserDataApi = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const users = await res.json();

    if (!res.ok) {
      setError(true);
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
  };

  const refresh = useCallback(async () => {
    await CallUserDataApi();
  }, []);

  useEffect(() => {
    CallUserDataApi();
  }, []);

  return { userData, isloading: userData === undefined, error, refresh };
};
