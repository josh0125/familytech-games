import { useState } from 'react';
import { Modal } from "@mui/material";
import Person from "@/components/person";
import { useUser } from "@/contexts/UserContext";

function Clue(props) {
  const { number, word, clue } = props;
  const [displayClue, setDisplayClue] = useState(true);
  const [showPersonInfo, setShowPersonInfo] = useState(false); 
  const [currentPerson, setCurrentPerson] = useState(null);
  const { userFSData } = useUser();

  const transformWord = (word) => {
    if (word.length < 3) {
      return word; // Handle words with less than three characters
    }

    const firstThreeLetters = word.slice(0, 3);
    const underscores = '_'.repeat(word.length - 3);

    return firstThreeLetters + underscores;
  };
  // Switches between clue and answer
  function handleContextMenu(event) {
    event.preventDefault();
    
    setDisplayClue(!displayClue);
  }

  // Shows the person Modal when their name is clicked (little convoluted, maybe fix later)
  function handleNameClick() { 
    if (!displayClue) {
      const transformedMap = new Map([...userFSData.entries()].map(([key, value]) => [value.name.compressedName, { key }]));
      const foundPerson = transformedMap.get(word)
      const realFoundPerson = userFSData.get(Object.values(foundPerson)[0])
      if (foundPerson) {
        setCurrentPerson(realFoundPerson);
        setShowPersonInfo(true);
      }
    }
  }

  // useEffect(() => {
  //   setDisplayClue(false);
  // }, []);

  return (
    <>
      <div 
        onContextMenu={handleContextMenu}
        onClick={displayClue ? null : handleNameClick}
      >
        {number + ". " + (displayClue ? clue : transformWord(word))}
      </div>
      <Modal open={showPersonInfo} onClose={() => setShowPersonInfo(false)}>
        <Person personData={currentPerson}/>
      </Modal>
    </>
  );
}

export default Clue;