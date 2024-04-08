import useWordSearchWords from './useWordSearchWords'
import useWordSearchGrid from './useWordSearchGrid';
import useWordSearchSelection from './useWordSearchSelection';

export default function useWordSearch(gridSize, wordLists, defaultWordListIndex, onRestarted){

  const debugMode = false;

const {
  handleDropdownChange, 
  chosenList, 
  words,
  regenerateWords
} = useWordSearchWords(
    wordLists,
    defaultWordListIndex,
    gridSize, 
    handleRegenerateGrid);

const {
  grid, 
  regenerateGrid, 
  wordLocations,
  loaded
} = useWordSearchGrid(
    words, 
    gridSize,
    debugMode)

const {
  wordsRemaining,
  setWordsRemaining,
  selectedCells,
  completedCells,
  clearGrid,
  handleCellSelected,
} = useWordSearchSelection(grid, wordLocations)


function handleRegenerateGrid(){
  clearGrid();
  regenerateWords();
  regenerateGrid();
  onRestarted();
}


return {
  grid, 
  chosenList,
  wordLocations: wordLocations.current, 
  wordsRemaining, 
  setWordsRemaining, 
  selectedCells, 
  completedCells, 
  handleCellSelected, 
  handleRegenerateGrid, 
  handleDropdownChange, 
  loaded
  }
}