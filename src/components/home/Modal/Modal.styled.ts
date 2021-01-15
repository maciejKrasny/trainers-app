import styled from 'styled-components';
import SpecializationsSelect from '../Selects/SpecializationsSelect';

export const BodyContainer = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    border-radius: 4px;
    padding: 2rem 5rem;
    width: 300px;
`;

export const SelectContainer = styled.div`
    margin-top: 1rem;
`; 

export const LoadingBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
`;