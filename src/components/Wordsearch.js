import useWordSearch from '../hooks/useWordSearch';
import {useEffect, useState} from 'react'
import Grid from './Wordsearch/Grid'
import WordsearchHeader from './Wordsearch/WordsearchHeader';
import WordsearchFooter from './Wordsearch/WordsearchFooter';
import styles from './wordsearch.module.css'

export default function Wordsearch({ gridRows = 10, wordLists, defaultWordListIndex, restartRef, onRestarted, showHeader = true }){
  
  const minGridSize = 6;
  const maxGridSize = 20;
    
    const [gridSize, setGridSize] = useState(Math.min(Math.max(gridRows, minGridSize), maxGridSize))

    function incrementGridSize(){
      setGridSize(Math.min(Math.max(gridSize + 1, minGridSize), maxGridSize))
    }
    
    function decrementGridSize(){
      setGridSize(Math.min(Math.max(gridSize - 1, minGridSize), maxGridSize))
    }

    const {
      handleDropdownChange, 
      chosenList,

       grid,
       handleRegenerateGrid, 
       wordLocations, 

       wordsRemaining,
       setWordsRemaining,

       selectedCells, 
       completedCells, 
       handleCellSelected, 

       loaded
} = useWordSearch(gridSize, wordLists, defaultWordListIndex, onRestarted);

useEffect(() => {
  if (!restartRef) return;
  const ref = restartRef.current;
  ref.addEventListener('click', handleRegenerateGrid);
  return () => {
    ref.removeEventListener('click', handleRegenerateGrid);
  }
}, [restartRef, handleRegenerateGrid])

    useEffect(() => {
      setWordsRemaining(wordLocations)
    }, [grid, setWordsRemaining, wordLocations]);

if(!loaded){
        return <div></div>
}
    return <div className={styles.mainContainer}>
    {showHeader && <WordsearchHeader show={showHeader} chosenList={chosenList} wordListOptions={wordLists} handleWordListSelection={handleDropdownChange} incrementGridSize={incrementGridSize} decrementGridSize={decrementGridSize} gridSizeDisplay={gridSize}/> }
    <Grid grid={grid} selectedCells={selectedCells} completedCells={completedCells} onSelect={handleCellSelected} />
    <WordsearchFooter wordLocations={wordLocations} wordsRemaining={wordsRemaining} />
  </div>
}