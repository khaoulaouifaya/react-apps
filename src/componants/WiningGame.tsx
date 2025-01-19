import { useActionData } from "react-router-dom";
import { useState } from "react";
import {Card} from "./models/Card"

import "../assets/game.css"

function WiningGame() {
    var listOfImogies: string[] = ["🍒", "🌽","🍉","🌼","🍩","⭐","🏠","🍎"]
    var doubledList = listOfImogies.flatMap((element) => [element, element]);

    var [selectedCardsIndex, setSelectedCardsIndex] = useState<number[]>([]);
    var [selectedCardsContent, setSelectedCardsContent] = useState<string[]>([]);

    const [nbrMove, incrementNbrOfMove] = useState(0);

    const clearAllCards = () => {
        setSelectedCardsIndex([]);  
        setSelectedCardsContent([]); 
    };

    const showOrHideCard = (cardContent: string,indexElement:number) => {
        incrementNbrOfMove(nbrMove+1);

        const normalizedContent = cardContent.trim().toLowerCase();

        if(selectedCardsIndex.length < 2){
            setSelectedCardsIndex(prevState => [...prevState, indexElement]);
            setSelectedCardsContent(prevState => [...prevState, cardContent]);

            const isMatch = selectedCardsContent.some(item => item === normalizedContent);
    
            if (isMatch) {
                console.log("Bravo, it's a match!");
            } else {
                console.log("Ce n'est pas un match.");

            }
            setTimeout(() => {
                clearAllCards()
            }, 2000);

        }else if (selectedCardsIndex.length === 2) {
            console.log("we have two elements in the list ");
            
        }
    }

    const startGame = () => {
        return doubledList.map((element, index) => (
            <div className="card"
                style={selectedCardsIndex.includes(index) ? {background: "white"} : {background: "black"}}
                key={index}
                onClick={() => showOrHideCard(element,index)}>
                {selectedCardsIndex.includes(index) && <span> {element} </span>}
            </div>
        ));
    };

    const startTimer = ()=> {
        
    }


    return (
        <main className="col-md-8 p-4">
            <div className="text-center">
                <button className="btn btn-dark mb-3" onClick={startTimer}>Start</button>
                <div className="stats mb-3">
                    <span>{nbrMove} moves</span> | <span>time: 3 sec</span>
                </div>
                <div className="card-grid d-grid gap-2">
                    {startGame()}
                </div>
            </div>
        </main>
    );
}
export default WiningGame;