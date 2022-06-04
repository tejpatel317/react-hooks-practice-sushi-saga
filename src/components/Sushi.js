import React from "react";

function Sushi({sushi, onDisplayClick}) {
  const {id, name, img_url, price, eaten} = sushi

  function handleDisplayClick() {
    if (!eaten) {
      onDisplayClick(sushi)
    }
    else {
      alert("There is no sushi")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleDisplayClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
