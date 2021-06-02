import React from 'react';
import { CardContainer } from './style';

// export interface CardProps{
//     title: string
// }

export const Card: React.FC = () => {
    return (
        <CardContainer>
            <section>
                <div>
                    <button>teste1</button>
                </div>
                <div>
                    <button>teste2</button>
                </div>
                <div>
                    <button>teste3</button>
                </div>
                <div>
                    <button>teste4</button>
                </div>
            </section>
        </CardContainer>
    )
}

export default Card;


