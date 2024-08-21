import axios from "axios";

export const getUser = async (email: any) => {
  const { data } = await axios.post("/api/login", { email });
  return data;
};
