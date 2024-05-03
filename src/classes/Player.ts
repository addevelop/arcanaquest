import IAttack from "../Interfaces/Attack";
import { Regeneration } from "../Interfaces/Regeneration";
import ICharacter from "../Interfaces/Character";
class Player
{
    turnToPlay: boolean;
    character: ICharacter | undefined;
    lastAttack: IAttack | undefined;
    
    constructor(turnToPlay: boolean, character: ICharacter | undefined)
    {
        this.turnToPlay = turnToPlay;
        this.character = character;
    }

    public attack(attack: IAttack, player: Player)
    {
        player.lastAttack = attack;
        return player;
    }

    public regenerate(regenerate: Regeneration)
    {
        
    }
    
}

export default Player;