import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SetCard from "../components/SetCard";
import { ethers } from "ethers";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];
  const address = "0x028618150584251dd3145aaf4aca3e288a87aeb7";
  const erc20 = new ethers.Contract(address, abi);
  // const symbol = await erc20.symbol();
  //console.log("symbol", symbol);

  const handlePageDec = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handlePageInc = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: `{\r\n    sets(first: 5, skip:${
        5 * page
      }, orderBy: supply) {\r\n    id\r\n    address\r\n    name\r\n    symbol\r\n    units\r\n    components\r\n  }\r\n\r\n}`,
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    fetch(
      "https://api.thegraph.com/subgraphs/name/graphitetools/tokensets",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data.sets);
        setData(result.data.sets);
      })
      .catch((error) => console.log("error", error));
  }, [page]);
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      {data.length < 1 ? (
        <Text>Loading...</Text>
      ) : (
        <Flex flexDirection={"column"}>
          {data.map((el, i) => {
            return <SetCard key={i} data={el} />;
          })}
        </Flex>
      )}
      <Flex gap={"10px"} alignItems={"center"}>
        <Button onClick={handlePageDec}>Prev Page</Button>
        <Text>{`Current Page : ${page + 1}`}</Text>
        <Button onClick={handlePageInc}>Next Page</Button>
      </Flex>
    </Flex>
  );
};

export default HomePage;
