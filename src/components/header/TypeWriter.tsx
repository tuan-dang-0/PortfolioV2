import { useState, useEffect } from 'react';

const Typewriter = ({
  words,
  delay,
  infinite,
}: {
  words: Array<string>;
  delay: number;
  infinite: boolean;
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currDirection, setCurrentDirection] = useState('forward');
  const [currWordIndex, setCurrentWordIndex] = useState(0);
  const numWords = words.length;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (
      currentIndex <= words[currWordIndex].length &&
      currDirection === 'forward'
    ) {
      timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText + words[currWordIndex][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (currentIndex >= 0 && currDirection === 'backward') {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, delay);
    } else if (infinite && currDirection === 'forward') {
      setCurrentIndex(words[currWordIndex].length - 1);
      setCurrentText(words[currWordIndex]);
      setCurrentDirection('backward');
    } else {
      if (currWordIndex === numWords - 1) {
        setCurrentWordIndex(0);
      } else {
        setCurrentWordIndex(currWordIndex + 1);
      }
      setCurrentIndex(0);
      setCurrentText('');
      setCurrentDirection('forward');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, words]);

  return <span className="">A{currentText}</span>;
};

export default Typewriter;
