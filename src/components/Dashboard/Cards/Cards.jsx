import React from "react";
import "./Cards.css"

import { CardsData } from "../../../data/data.js"
import Card from "../Cards/Card/Card.jsx";

function Cards() {

  return (
    <div className="Cards">
       {
          CardsData.map((card, id) => {
            return (
              <div className="card_container" key={id}>
                <Card title={card.title} color={card.color} barValue={card.barValue} value={card.value} png={card.png} series={card.series} />
              </div>
            )
          })
       }
    </div>
  );
}

export default Cards;