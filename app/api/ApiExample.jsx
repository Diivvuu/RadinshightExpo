import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { useError } from "../_components/ErrorContext";

const APIExample = () => {
  const { handleError } = useError();

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        handleError(error); // error will go to error context
      }
    };

    fetchData();
  }, [handleError]);

  return (
    <View>
      <Text>{data.length !== 0 ? data.fact : "Fetching data..."}</Text>
    </View>
  );
};

export default APIExample;
