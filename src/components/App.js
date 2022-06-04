import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(250)

  useEffect(()=>{
    fetch(API)
    .then((r) => r.json())
    .then((serverSushis) => {
      const appSushis = serverSushis.map((sushi) => {
        return {...sushi, eaten: false}
      })
      setSushis(appSushis)
    })
  },[])

  function onDisplayClick(displaySushi) {
    
    if (money >= displaySushi.price) {
      const newSushis = sushis.map((sushi) => {
        if (sushi.id === displaySushi.id) {
          return {...sushi, eaten: true}
        }
        else {
          return sushi
        }
      })
      setSushis(newSushis)
      setMoney((money) => money-displaySushi.price)
    }
    else {
      alert("You need more money")
    }
  }

  const arrayOfEatenSushis = sushis.filter((sushi) => {
    return sushi.eaten
  })


  return (
    <div className="app">
      <SushiContainer sushis={sushis} onDisplayClick={onDisplayClick}/>
      <Table plates={arrayOfEatenSushis} money={money}/>
    </div>
  );
}

export default App;
