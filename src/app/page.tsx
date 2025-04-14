'use client'
import { Container } from "@mui/material";
import Nav from "../../components/Nav";
import Search from "../../components/search";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
    
    const searchForQuery = (query: string) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then(
            (response) => response.json().then((data) => setResult(data))
        )
    };

    console.log(result)
  return (
    <Container maxWidth="md">
      <Nav/>
      <Search searchForQuery={searchForQuery}/>
    </Container>
  );
}
