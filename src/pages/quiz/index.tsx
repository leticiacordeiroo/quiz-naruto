import React from 'react';
import Card from '../../components/Card';
import { QuizContainer } from './style';

const Quiz: React.FC = () => {

  return (
    <QuizContainer>
        <h2>Quiz</h2>
        <Card />
    </QuizContainer>
  )
}

export default Quiz;