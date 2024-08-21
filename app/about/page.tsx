import { Metadata } from "next";
import Layout from "./Layout";

export const metadata: Metadata = {
  title: "About - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default page;
