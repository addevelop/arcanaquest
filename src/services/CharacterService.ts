import { CHARACTER } from "../constantes/nameData";
import THttp from "./THttp";

class CharacterService
{
    public static getCharacters()
    {

        THttp.getData(CHARACTER);

    }
}

export default CharacterService