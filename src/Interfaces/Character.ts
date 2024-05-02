import IAttack from "./Attack";

interface ICharacter{
    id: number;
    name : string;
    picture : string;
    profil : string;
    life: number;
    attack : IAttack[];
}

export default ICharacter;