import { Button, Chip } from "@material-ui/core";
import React, { useState } from "react"
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import { Container, Description, DescriptionLabel, ButtonContainer } from "./InfoSection.styled";
import DescriptionIcon from "@material-ui/icons/Description";
import { User } from "../../redux/modules/Users/types";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

interface InfoSectionProps {
  user?: User;
}

const InfoSection: React.FC<InfoSectionProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers);
console.log(user)
console.log(currentAuthorizationUser)

  return (
    <Container>
      {user?.id === currentAuthorizationUser?.userId && <ButtonContainer>
        <Button variant="contained" color="primary" style={{ width: 100 }} onClick={() => setIsOpen(true)}>Edytuj</Button>
      </ButtonContainer>}
      <TextWithIcon icon="Home" category="Miasto" content={<>{user?.city}</>} />
      <TextWithIcon icon="FitnessCenter" category="Specjalizacje" content={<>{user?.specializations.map(spec => <Chip style={{ marginRight: '0.5rem' }} key={spec} variant="outlined" label={spec} />)}</>} />
      <TextWithIcon icon="MailOutline" category="E-mail" content={<>{user?.email}</>} />
      <TextWithIcon icon="Smartphone" category="Nr kontantowy" content={<>{user?.nrPhone}</>} />
      <DescriptionLabel><DescriptionIcon style={{ fontSize: 25, marginRight: '0.5rem' }} />Opis:</DescriptionLabel>
      <Description>
        {user?.shortDescription}
      </Description>
      <Modal type="editInfo" onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </Container>
  )
};

export default InfoSection;
