import styled from 'styled-components';

const TitleTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  position: relative;
  :after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 29px;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Tab = styled.div`
  margin-right: 0.5rem;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  position: relative;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.selectedColor || '#0072b6'};
  cursor: pointer;
  :hover {
    color: ${props => props.theme.hoverColor };
  }
  :after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 29px;
    left: 0;
    bottom: 16px;
    background: ${props => props.theme.selectedColor || '#0072b6'};
  }
`;

export { TitleTabsContainer, Tab };
