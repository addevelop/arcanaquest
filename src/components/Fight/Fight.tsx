import React, { useEffect, useState, ChangeEvent } from 'react'
import Player from '../../classes/Player'
import CharacterService from '../../services/CharacterService'
import IAttack from '../../Interfaces/Attack'
import AttackService from '../../services/AttackService'
import ICharacter from '../../Interfaces/Character'
function Fight() {
    
    const [players, setPlayers] = useState<Player[]>([])

    const randomNumber = Math.floor(Math.random() * 4) + 1;

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

            const player1 = new Player(false, character1, 1);
            const player2 = new Player(true, character2, 2);

            setPlayers([player1, player2]);
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
              { player.character?.life && player.character.life < 0 && (
                  <div>
                      Game over
                  </div>
              )}
          </div>
          <div>
            {player.character?.name}
          </div>
          <select onChange={(e) => handleChangeAttack(e.target.value, player)}>
            {player.character?.attacks.map((attack, index) => (
              <option key={`attack-${attack.id}`} value={attack.id}>{attack.name}</option>
            ))}
          </select>
          { player.turnToPlay && player.character?.life && player.character?.life>0 &&(
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