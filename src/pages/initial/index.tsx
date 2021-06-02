import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';


const Initial: React.FC = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/quiz");
  }

  return (
    <div>
        <Button backgroundColor={''} label={'iniciar quiz'} icon={false} onClick={handleClick} ></Button>
    </div>
  )
}

export default Initial;


