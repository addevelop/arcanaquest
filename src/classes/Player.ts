import IAttack from "../Interfaces/Attack";
import { Regeneration } from "../Interfaces/Regeneration";
import ICharacter from "../Interfaces/Character";
class Player
{
    id : number;
    turnToPlay: boolean;
    character: ICharacter | undefined;
    lastAttack: IAttack | undefined;
    
    constructor(turnToPlay: boolean, character: ICharacter | undefined, id : number)
    {
        this.id = id;
        this.turnToPlay = turnToPlay;
        this.character = character;
    }

    public attack(attack: IAttack | undefined)
    {
        this.lastAttack = attack;
        
    }

    public regenerate(regenerate: Regeneration)
    {
        
    }
    
}

export default Player;