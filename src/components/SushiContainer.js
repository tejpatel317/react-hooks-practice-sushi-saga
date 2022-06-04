import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, onDisplayClick}) {

  const [sushiPosition, setSushiPosition] = useState(0)

  function handleMoreClick() {
    setSushiPosition((sushiPosition) => (sushiPosition+4) % sushis.length)
  }

  const sushiComponents = sushis
    .slice(sushiPosition, sushiPosition+4)
    .map((sushi) => {
      return <Sushi key={sushi.id} sushi={sushi} onDisplayClick={onDisplayClick}/>
  })

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
