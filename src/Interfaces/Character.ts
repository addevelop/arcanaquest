import { Attack } from "./Attack";

interface Character{
    name : string;
    picture : string;
    profil : string;
    life: number;
    attack : Attack
}

export type {Character}