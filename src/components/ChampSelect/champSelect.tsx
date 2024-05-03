import React, { useEffect, useState } from 'react'
import './ChampSelect.css'
import CharacterService from '../../services/CharacterService';
import ICharacter from '../../Interfaces/Character';

function ChampSelect() { 
    const [playerSelected1, setPlayerSelected1] = useState(0);
    const [playerSelected2, setPlayerSelected2] = useState(0);
    const [characters, setcharacters] = useState<ICharacter[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await CharacterService.getCharacters();
            if(response){
                setcharacters(response);
            }
         }
        fetchData();
    }, [])

    useEffect(() => {
        console.log('t', characters);
    }, [characters])
  return (
    <div>
        <h1>ArcanaQuest</h1>

        <h2>Choisissez votre personnage</h2>

        <div className="row">
            {characters.map((character) => (
            <div key={character.id}>{character.name}
                
                <img className="boxChamp" src={ `./img/${character.picture}`} alt="champion"/>
                
            </div>
            ))}  
        </div>    
        

    </div>
  )
}

export default ChampSelect