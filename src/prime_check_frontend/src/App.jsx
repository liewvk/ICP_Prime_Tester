import React, { useState } from "react";
import { prime_check_backend } from "../../declarations/prime_check_backend";

function App() {
  const [result, setResult] = useState("");

  // Handler to call checkPrime and update the result
  function handleSubmit(event) {
    event.preventDefault();
    const number = parseInt(event.target.elements.number.value, 10);

    if (isNaN(number)) {
      setResult("Please enter a valid number.");
      return;
    }

    // Call the checkPrime function and update the state with the result
    prime_check_backend.checkPrime(number).then((res) => {
      setResult(res);
    }).catch((error) => {
      console.error("Error:", error);
      setResult("Failed to check if the number is prime.");
    });

    return false;
  }

  return (
    <main>
 <img src="/logo2.svg" alt="DFINITY logo" />

      <h1 align="center">Prime Number Checker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter a number: &nbsp;</label>
        <input id="number" name="number" type="number" />
        <button type="submit">Check if Prime</button>
      </form>
      <section id="result">{result}</section>
    </main>
  );
}

export default App;

