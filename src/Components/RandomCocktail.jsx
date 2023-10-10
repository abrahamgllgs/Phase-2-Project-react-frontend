import { useEffect, useState } from "react";

useEffect(() => {
  const fetchMargaritas = async () => {
    const url = "http://localhost:3004/Margritas";
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      setMargaritas(jsonData);
    } catch (error) {
      console.error("Error occured when fetching data", error);
      return null;
    }
  };

  fetchMargaritas();
}, []);
