import { ATTACK } from "../constantes/nameData";
import IAttack from "../Interfaces/Attack";
import THttp from "./THttp";
class AttackService
{
    static async getAttackById(id: number): Promise<IAttack | undefined>
    {
        try
        {
            const data: any = await THttp.getData(ATTACK);

            if('attacks' in data)
            {
                const attacks = data.attacks as IAttack[];
                const attack = attacks.find(char => char.id === id);
                return attack;
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

export default AttackService;