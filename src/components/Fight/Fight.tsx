import React, { useEffect, useState, ChangeEvent } from 'react'
import Player from '../../classes/Player'
import CharacterService from '../../services/CharacterService'
import IAttack from '../../Interfaces/Attack'
import AttackService from '../../services/AttackService'
import ICharacter from '../../Interfaces/Character'
function Fight() {
    
    const [players, setPlayers] = useState<Player[]>([])

    
    const generateRandomNumber = () => {
      let newRandomNumber = Math.floor(Math.random() * 4) + 1;
      while (players.some(player => player.id === newRandomNumber)) {
        newRandomNumber = Math.floor(Math.random() * 4) + 1;
      }
      return newRandomNumber;
    }

    const randomNumber = generateRandomNumber();

    console.log(randomNumber);

    useEffect(() => {
        const fetchData = async () => {
            let character1 : ICharacter | undefined;
            const queryParameters = new URLSearchParams(window.location.search)
            const user  = queryParameters.get("character");
            console.log("user recuperer : " ,user);
            if(user)
            {
              const idCharacter : number = +user;
              character1 = await CharacterService.getCharacterById(idCharacter);
             
            }
            else{
              character1 = await CharacterService.getCharacterById(1);
             
            }
            
            const character2 = await CharacterService.getCharacterById(randomNumber);

            const start =  Math.floor(Math.random() * (2) + 1);
            console.log("start joueur : ",start);

            switch(start){
              case 1:{
                const player1 = new Player(true, character1, 1);
                const player2 = new Player(false, character2, 2);
                setPlayers([player1, player2]);
                break;
              }
              case 2:{
                const player1 = new Player(false, character1, 1);
                const player2 = new Player(true, character2, 2);
                setPlayers([player1, player2]);
                break;
              }
              default: { 
                const player1 = new Player(false, character1, 1);
                const player2 = new Player(true, character2, 2);
                setPlayers([player1, player2]);
                break; 
              } 
            }


        }
        fetchData();
        
    }, [])
    useEffect(() => {
        console.log(players);

    }, [players])

    const handleAttack = (p: Player) => {

      const oppenent = players.find(player => !player.turnToPlay);
      
      console.log("attaque de : ",p, " vers ", oppenent);

      console.log(p.lastAttack)
      const damage_min = p.lastAttack?.damage_min;
      const damage_max = p.lastAttack?.damage_max;
      console.log("dommage min :" , damage_min, " dommage max : ", damage_max)
      if(damage_min && damage_max)
      {
        const damage = Math.floor(Math.random() * (damage_max - damage_min)) + damage_min;

        console.log("dommage :", damage);
        if(oppenent?.character?.life)
          {
            const oppenent_life   = oppenent.character.life - damage;
            oppenent.character.life = oppenent_life;
            oppenent.turnToPlay = true;
            p.turnToPlay = false;

            setPlayers(prevPlayers => prevPlayers.map(player => player.id === oppenent.id ? oppenent : player));

            console.log(oppenent);
            console.log(p);
          }
      }
      else
      {
        const damage = 0
        console.log("dommage :", damage);
        if(oppenent?.character?.life)
          {
            const oppenent_life   = oppenent.character.life - damage;
            oppenent.character.life = oppenent_life;
            oppenent.turnToPlay = true;
            p.turnToPlay = false;

            setPlayers(prevPlayers => prevPlayers.map(player => player.id === oppenent.id ? oppenent : player));

            console.log(oppenent);
            console.log(p);
          }
      }
    }

    const handleChangeAttack = async (id: string, p: Player) => {
      const numId = +id;
      const attack = await AttackService.getAttackById(numId);

      console.log(attack);
      console.log(p);
      p.attack(attack);
      console.log(p);

    }
  return (
    <div>
      { players.map((player, index) =>  (
        <section key={index}>
          <div>
            {player.character?.life}
          </div>
          <div>
              { player.character?.life && player.character.life <+ 0 && (
                  <div>
                      Game over
                  </div>
              )}
          </div>
          <div>
            {player.character?.name}
          </div>
          <div>
            <img className="boxPixel" src={ `./img/${player.character?.pixel}`} alt="champion"/>
          </div>
          <select onChange={(e) => handleChangeAttack(e.target.value, player)}>
            {player.character?.attacks.map((attack, index) => (
              <>
              <option value="">--Please choose an option--</option>
              <option id={`attackPlayer${player.id}`} key={`attack-${attack.id}`} value={attack.id}>{attack.name}</option>
              </>
            ))}
            
          </select>
          { player.turnToPlay && player.character?.life && player.character?.life >0 &&(
            <div>
              <button onClick={() => handleAttack(player)}>attack</button>
            </div>
          )}
          
        </section>
      ))}
      <div>
        <section>
          
        </section>
      </div>
    </div>
  )
}

export default Fight