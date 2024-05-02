import { ATTACKDATA, CHARACTERDATA, REGENERATIONDATA } from "../constantes/data";
import { ATTACK, CHARACTER, REGENERATION } from "../constantes/nameData";

class THttp {
    static async getData(nameData: string): Promise<any>
    {

        console.log("Debut");
        switch(nameData){
            case CHARACTER:{
                try {
                    const response = await fetch(CHARACTERDATA);
                    const jsonData = await response.json();

                    return jsonData;
                } catch (error) {
                    console.error('Erreur lors de la récupération des données JSON:', error);
                    throw error;
                }
            }
            case ATTACK: {
                try {
                    const response = await fetch(ATTACKDATA);
                    const jsonData = await response.json();

                    return jsonData;
                } catch (error) {
                    console.error('Erreur lors de la récupération des données JSON:', error);
                    throw error;
                }
            }
            case REGENERATION: {
                try {
                    const response = await fetch(REGENERATIONDATA);
                    const jsonData = await response.json();
                    return jsonData;
                } catch (error) {
                    console.error('Erreur lors de la récupération des données JSON:', error);
                    throw error;
                }
            }
        }
    }
}

export default THttp;