import Head from 'next/head'
import Wordsearch from '../src/components/Wordsearch'
import { useRef } from 'react';

export default function Home() {

  const restartBtnRef = useRef();

  const fruits = ["APPLE", "BANANA", "MANGO", "KIWI", "ORANGE", "PEAR", "STRAWBERRY", "MELON", "GRAPE", "PINEAPPLE", "APRICOT", "ELDERBERRY", "DAMSON", "PLUM", "SULTANA", "BLUEBERRY", "GRAPEFRUIT", "KUMQUAT", "LIME", "LEMON", "RASPBERRY", "BLACKBERRY", "RHUBARB", "WATERMELON", "TOMATO"];
  const vegetables = ["PEA", "CUCUMBER", "BROCCOLI", "AUBERGINE", "CARROT", "POTATO", "CHILI", "SPINACH", "LETTUCE", "MUSHROOM", "CABBAGE", "LEEK", "SWEETCORN", "PUMPKIN", "PARSNIP", "TURNIP", "RADISH", "CELERY", "ASPARAGUS", "PEPPER", "BEETROOT"];
  const animals = ["LION", "TIGER", "CAT", "PARROT", "DOG", "RABBIT", "FOX", "RAT", "REINDEER", "BAT", "MOUSE", "BADGER", "MOLE", "HEDGEHOG", "MONKEY", "TOAD", "FROG", "DEER", "OTTER", "HORSE", "ZEBRA", "SHEEP", "CHICKEN", "OWL", "RACCOON", "MEERKAT", "CAMEL", "SQUIRREL"]
  const euroCountries = ["GERMANY", "GREECE", "CYPRUS", "ITALY", "IRELAND", "ENGLAND", "SCOTLAND", "WALES", "AUSTRIA", "BELARUS", "BULGARIA", "CROATIA", "FINLAND", "FRANCE", "SWITZERLAND", "NETHERLANDS", "SWEDEN", "DENMARK", "SPAIN", "PORTUGAL", "HUNGARY", "POLAND", "TURKEY", "BELGIUM", "BOSNIA", "LITHUANIA", "SERBIA", "ROMANIA", "UKRAINE", "MONTENEGRO", "MALTA", "MACEDONIA", "SLOVENIA", "SLOVAKIA", "NORWAY"]
  const empires = ["BRITISH", "MONGOL", "RUSSIAN", "QING", "SPANISH", "FRENCH", "ABBASID", "UMAYYAD", "YUAN", "MING", "ACHAEMENID", "ROMAN", "OTTOMAN", "BYZANTINE", "PORTUGUESE", "CARTHAGINIAN", "EGYPTIAN", "ASSYRIAN", "HOLYROMAN", "SELEUCID", "SELJUQ", "TIMURID", "MUGHAL", "AZTEC", "JAPAN", "FRANKISH"]
  const constellations = ["ANDROMEDA", "ANTLIA", "AQUARIUS", "ARIES", "CAELUM", "CAPRICORNUS", "CANCER", "CARINA", "CETUS", "CEPHEUS", "CORVUS", "DRACO", "DORADO", "ERIDANUS", "HERCULES", "DELPHINUS", "LYRA", "LYNX", "MUSCA", "NORMA", "ORION", "LEO", "PEGASUS", "PHOENIX", "PISCES", "SAGITTARIUS", "SERPENS", "SCUTUM", "TUCANA", "TRIANGULUM", "VIRGO", "VELA"];

  const wordLists = [
    {name: "Fruits", words: fruits},
    {name: "Vegetables", words: vegetables}, 
    {name: "Animals", words: animals},
    {name: "European Countries", words: euroCountries},
    {name: "Empires", words: empires},
    {name: "Constellations", words: constellations}
  ]

  function onRestarted() {
    console.log("Restarted")
  }

  return (
    <div>
      <Head>
        <title>Wordsearch</title>
        <meta name="description" content="Wordsearch" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Wordsearch 
        gridRows={6}
        wordLists={wordLists}
        defaultWordListIndex={0}
        restartRef={restartBtnRef}
        onRestarted={onRestarted}
        showHeader={true}
       />
       <button ref={restartBtnRef}>Restart</button>
    </div>
  )
}
