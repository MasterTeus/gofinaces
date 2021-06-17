import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "@gofinance:transactions";

export const getTransactions = async () => {
  const response = await AsyncStorage.getItem(key);
  const responseFormated = response ? JSON.parse(response) : [];
  return responseFormated;
};

export const storeTransaction = async (dataFormated) => {
  await AsyncStorage.setItem(key, JSON.stringify(dataFormated));
};
