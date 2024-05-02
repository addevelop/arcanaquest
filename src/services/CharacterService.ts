import IAttack from "../Interfaces/Attack";
import ICharacter from "../Interfaces/Character";
import { CHARACTER } from "../constantes/nameData";
import AttackService from "./AttackService";
import THttp from "./THttp";

class CharacterService
{
    static async getCharacters(): Promise<ICharacter[] | undefined>
    {

        try
        {
            const data: any = await THttp.getData(CHARACTER);

            if('charaters' in data)
            {
                const characters = data.characters as ICharacter[];
                return characters;
            }
            else
            {
                return undefined;
            }
        }
        catch(err)
        {
            throw err;
        }

    }

    static async getCharacterById(id: number): Promise<ICharacter | undefined>
    {
        try
        {
            const data: any = await THttp.getData(CHARACTER);

            if('characters' in data)
            {
                const characters = data.characters as ICharacter[];
                const character = characters.find(char => char.id === id);
                return character;
            }
            else
            {
                return undefined;
            }
        }
        catch(err)
        {
            throw err;
        }
        
        
    }
}

export default CharacterService