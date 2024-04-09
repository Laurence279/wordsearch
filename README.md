
## [react-wordsearch](https://www.npmjs.com/package/react-wordsearch)

> A simple wordsearch for React

[![NPM](https://img.shields.io/npm/v/react-wordsearch.svg)](https://www.npmjs.com/package/react-wordsearch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-wordsearch
```

## Usage

```jsx
import { Wordsearch } from 'react-wordsearch'
import 'react-wordsearch/dist/index.css'

  const fruits = ["APPLE", "BANANA", "MANGO", "KIWI", "ORANGE", "PEAR", "STRAWBERRY", "MELON", "GRAPE", "PINEAPPLE", "APRICOT", "ELDERBERRY", "DAMSON", "PLUM", "SULTANA", "BLUEBERRY", "GRAPEFRUIT", "KUMQUAT", "LIME", "LEMON", "RASPBERRY", "BLACKBERRY", "RHUBARB", "WATERMELON", "TOMATO"];
  const vegetables = ["PEA", "CUCUMBER", "BROCCOLI", "AUBERGINE", "CARROT", "POTATO", "CHILI", "SPINACH", "LETTUCE", "MUSHROOM", "CABBAGE", "LEEK", "SWEETCORN", "PUMPKIN", "PARSNIP", "TURNIP", "RADISH", "CELERY", "ASPARAGUS", "PEPPER", "BEETROOT"];
  const animals = ["LION", "TIGER", "CAT", "PARROT", "DOG", "RABBIT", "FOX", "RAT", "REINDEER", "BAT", "MOUSE", "BADGER", "MOLE", "HEDGEHOG", "MONKEY", "TOAD", "FROG", "DEER", "OTTER", "HORSE", "ZEBRA", "SHEEP", "CHICKEN", "OWL", "RACCOON", "MEERKAT", "CAMEL", "SQUIRREL"]

  const wordLists = [
    { name: "Fruits", words: fruits },
    { name: "Vegetables", words: vegetables }, 
    { name: "Animals", words: animals }
  ]

function App() {
  const restartBtnRef = useRef();

  function onRestarted() {
    console.log("Restarted")
  }

  return (
    <>
      <Wordsearch 
        gridRows={6} // Size of the grid. Clamped between 6 and 20. Default = 10.
        wordLists={wordLists} // Array containing each word list. Use { name: string, words: string[] } for each list.
        defaultWordListIndex={0} // Applied when using more than one word list. Default = 0.
        restartRef={restartBtnRef} // Element ref used to regenerate the wordsearch when clicked.
        onRestarted={onRestarted} // Callback for when the wordsearch is restarted.
        showHeader={true} // Optional display of title, grid size and dropdown for multiple lists. Default: true.
       />
       <button ref={restartBtnRef}>Restart</button>
    </>
  )
}

export default App;
```

<br/>

[Preview](https://searchingofthewords.netlify.app/)

## License

MIT © [Laurence279](https://github.com/Laurence279)

