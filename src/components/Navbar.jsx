import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      height={"70px"}
      border={"1px solid #eeeef1"}
      alignItems={"center"}
      pl={"20px"}
      pr={"20px"}
      gap={"20px"}
    >
      <Text width={"300px"} textAlign={"left"}>
        Name
      </Text>
      <Select
        //value={sortBy}
        label="price"
        //onChange={handleSort}
        width={"150px"}
        backgroundColor={"white"}
        border={"none"}
      >
        <option value={""}>Market Cap</option>
        <option value={"asc"}>Low to High</option>
        <option value={"desc"}>High to Low</option>
      </Select>
      <Select
        //value={sortBy}
        label="price"
        //onChange={handleSort}
        width={"150px"}
        backgroundColor={"white"}
        border={"none"}
      >
        <option value={""}>Price</option>
        <option value={"asc"}>Low to High</option>
        <option value={"desc"}>High to Low</option>
      </Select>
    </Flex>
  );
};

export default Navbar;
