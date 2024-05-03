import React, { useEffect, useState, ChangeEvent } from 'react'
import Player from '../../classes/Player'
import CharacterService from '../../services/CharacterService'
import IAttack from '../../Interfaces/Attack'
import AttackService from '../../services/AttackService'
function Fight() {
    
    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const character1 = await CharacterService.getCharacterById(1);
            const character2 = await CharacterService.getCharacterById(2);

            const player1 = new Player(false, character1);
            const player2 = new Player(true, character2);

            setPlayers([player1, player2]);
        }
        fetchData();
        
    }, [])
    useEffect(() => {
        console.log(players);

    }, [players])

    const handleAttack = (p: Player) => {
      console.log(p)

    }

    const handleChangeAttack = async (id: string, p: Player) => {
      const numId = +id;
      const attack = await AttackService.getAttackById(numId);
    }
  return (
    <div>
      { players.map((player, index) =>  (
        <section key={index}>
          <div>
            {player.character?.life}
          </div>
          <div>
            {player.character?.name}
          </div>
          <select onChange={(e) => handleChangeAttack(e.target.value, player)}>
            {player.character?.attacks.map((attack, index) => (
              <option key={`attack-${attack.id}`} value={attack.id}>{attack.name}</option>
            ))}
          </select>
          { player.turnToPlay && (
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