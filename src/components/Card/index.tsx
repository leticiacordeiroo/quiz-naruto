import React from 'react';
import { CardContainer } from './style';
import Button from '../../components/Button';

export const Card: React.FC = () => {
    return (
        <CardContainer>
            <section>
                <h3>Perguntas aqui</h3>
                <div>
                    <button>teste2</button>
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


