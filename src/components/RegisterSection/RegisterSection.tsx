import React from 'react';
import { RegisterContainer, InfoContainer,  BackgroundContainer, Answer, Question} from './RegisterSection.styled';

const RegisterSection: React.FC = () => {
    return (
          <RegisterContainer>
              <BackgroundContainer/>
              <InfoContainer>
                  <Question>JESTEŚ TRENEREM LUB KIERUJESZ KLUBEM / OBIEKTEM SPORTOWYM?</Question>
                  <Answer>Dołącz do nas jak tysiące osób!</Answer>
              </InfoContainer>
          </RegisterContainer>
    );
}

export default RegisterSection;