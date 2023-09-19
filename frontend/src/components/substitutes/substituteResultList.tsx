import {substitute} from '../../models/substitute';
import { subResult } from './substituteResult'; 

interface const subResultListProps {
    substitutes: substitutes[]
}

export const subResultList = ({substitutes}: subResultListProps) => {
    return (
        <section className='subResultList'>
            {substitutes.map((substitute)=> (
                <result key = {substitute.id} substitute = {substitute}></result>
            ))}
        </section>
    )
}