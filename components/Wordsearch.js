import styles from '../styles/Home.module.css'
import useWordSearchGrid from '../hooks/useWordSearchGrid';
import {useEffect} from 'react'
import Row from './Row'
import Dropdown from './Dropdown';
import Grid from './Grid'

const gridCellCount = 100;
const gridColumnCount = 10;

const maxWords = Math.floor(gridCellCount / 10);
const maxChars = Math.floor(gridCellCount/100*60)


const fruits = ["APPLE", "BANANA", "MANGO", "KIWI", "ORANGE", "PEAR", "STRAWBERRY", "MELON", "GRAPE", "PINEAPPLE", "APRICOT", "ELDERBERRY", "DAMSON", "PLUM", "SULTANA", "BLUEBERRY", "GRAPEFRUIT", "KUMQUAT", "LIME", "LEMON", "RASPBERRY", "BLACKBERRY", "RHUBARB", "WATERMELON", "TOMATO"];
const vegetables = ["PEA", "CUCUMBER", "BROCCOLI", "AUBERGINE", "CARROT", "POTATO", "CHILI", "SPINACH", "LETTUCE", "MUSHROOM", "CABBAGE", "LEEK", "SWEETCORN", "PUMPKIN", "PARSNIP", "TURNIP", "RADISH", "CELERY", "ASPARAGUS", "PEPPER", "BEETROOT"];
const animals = ["LION", "TIGER", "CAT", "PARROT", "DOG", "RABBIT", "FOX", "RAT", "REINDEER", "BAT", "MOUSE", "BADGER", "MOLE", "HEDGEHOG", "MONKEY", "TOAD", "FROG", "DEER", "OTTER", "HORSE", "ZEBRA", "SHEEP", "CHICKEN", "OWL", "RACCOON", "MEERKAT", "CAMEL", "SQUIRREL"]
const wordList = [{name: "Fruits", words: fruits},{name: "Vegetables", words: vegetables}, {name: "Animals", words:animals}]


export default function Wordsearch(){

    const {letters, wordLocations, wordsRemaining, setWordsRemaining, selectedCells, completedCells, onCellSelected, regenerateGrid, handleSelectChange, loaded, chosenList} = useWordSearchGrid(gridCellCount, gridColumnCount, wordList);

    useEffect(() => {
  
        setWordsRemaining(wordLocations)
      
      
      }, [letters]);

if(!loaded){
        return <div></div>
}
    return <div className={styles.main} >
    <div className="header">
    <h1>{chosenList.current.name}</h1>
    <Dropdown onSelectChange={handleSelectChange} selected={chosenList.current.name}/>

    </div>


    <div className={styles.grid}>
    <table className="box"> 
    <tbody>

    {letters.map((arr, index)=>{    

      return <Row key={Math.random()} selectedCells={selectedCells} completedCells={completedCells} cells={arr} row={index} onSelect={onCellSelected}/>

    })}

    </tbody>
    </table>



</div>

<div className="words">
            {wordLocations.map((word, index)=>{
              return <h4 key={index} style={!wordsRemaining.find(remainingWord => remainingWord.id === word.id) ? {"textDecoration": "line-through", "textDecorationThickness": "3px"} : {}}>{word.insertedWord}</h4>
            })}
          </div>

          {wordsRemaining.length === 0 ? <p>All words found!</p> : <p></p>}
        <button onClick={()=>{
          regenerateGrid();
        }}>Restart</button>
  </div>
}