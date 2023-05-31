import { useEffect, useState } from "react";
import { GuessResult, verifyGuess } from "../utils/utils";

export const GuessTable: React.FC = () => {
  const [guesses, setGuesses] = useState<GuessResult[]>();
  useEffect(() => {
    const poulateList = () => {
      setGuesses([verifyGuess("1234", "4321"), verifyGuess("1234", "4231")]);
    };
    poulateList();
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Guess</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {guesses ? (
            guesses.map((guessAttempt, index, list) => {
              const { guess, hint } = guessAttempt;
              return (
                <tr key={list.length - index}>
                  <td>{list.length - index}</td>
                  <td>{guess}</td>
                  <td>{hint}</td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
