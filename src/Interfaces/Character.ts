import { Attack } from "./Attack";

interface Character{
    id: number;
    name : string;
    picture : string;
    profil : string;
    life: number;
    attack : Attack
}

export type {Character}