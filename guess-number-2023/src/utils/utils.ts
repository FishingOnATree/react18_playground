export type GuessResult = {
  answer: string;
  guess: string;
  hint: string;
  isCorrect: boolean;
};

export const answerGenerator = (numDigits: number): string => {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = [];
  for (let i = 0; i < numDigits; i++) {
    result.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1));
  }
  return result.join("");
};

export const verifyGuess = (answer: string, guess: string): GuessResult => {
  let correctPos = 0;
  let ansSet = new Set();
  let guessSet = new Set();
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess[i]) {
      correctPos++;
    } else {
      ansSet.add(answer[i]);
      guessSet.add(guess[i]);
    }
  }
  let intersection = new Set([...ansSet].filter((x) => guessSet.has(x)));
  return {
    guess,
    answer,
    hint: correctPos + "A" + intersection.size + "B",
    isCorrect: answer === guess,
  };
};
