import { ATTACKDATA, CHARACTERDATA, REGENERATIONDATA } from "../constantes/data";
import { ATTACK, CHARACTER, REGENERATION } from "../constantes/nameData";
import characters from "../data/characters.json";
import attacks from "../data/attacks.json";
import regenerations from "../data/regenerations.json"
class THttp {
    static async getData(nameData: string)
    {
        switch(nameData){
            case CHARACTER:{
                return characters || [];
            }
            case ATTACK: {
                return attacks || [];
            }
            case REGENERATION: {
                return regenerations || [];
            }
        }
    }
}

export default THttp;