'use client'
import { Container } from "@mui/material";
import Nav from "../../components/Nav";
import { useState } from "react";
import Search from "../../components/Search";
import Results from "../../components/Results";

export default function Home() {
  const [result, setResult] = useState<any>(null);
    
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
      {result === null ? null : <Results results={result}/>}
    </Container>
  );
}
