import IAttack from "./Attack";

interface ICharacter{
    id: number;
    name : string;
    picture : string;
    pixel : string;
    profil : string;
    life: number;
    attacks : any[];
}

export default ICharacter;