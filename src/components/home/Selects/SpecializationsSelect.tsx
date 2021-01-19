import React from "react"
import InputWithChips from "../InputWithChips/InputWithChips";
import {useSelector} from "react-redux";

interface SpecializationsSelectProps {
    onChange: (value: string[]) => void;
    value?: string[];
    id?: string;
}

const SpecializationsSelect: React.FC<SpecializationsSelectProps> = ({ onChange, value, id }) => {
    const { specializations } = useSelector(state => state.formData);

    return (
        <InputWithChips id={id} value={value} options={specializations} onChange={onChange} />
    )
};

export default SpecializationsSelect;
