import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";

const SetCard = ({ data }) => {
  return (
    <Flex
      border={"1px solid #eeeef1"}
      padding={"10px"}
      width={"100vw"}
      height={"100px"}
      alignItems={"center"}
    >
      <Box width={"50px"}></Box>
      <Text>{data.name}</Text>
    </Flex>
  );
};

export default SetCard;
