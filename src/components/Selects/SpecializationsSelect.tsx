import React from "react"
import { specializations } from "../../utils/consts/consts";
import InputWithChips from "../InputWithChips/InputWithChips";

interface SpecializationsSelectProps {
    onChange: (value: string[]) => void;
    value?: string[];
    id?: string;
}

const SpecializationsSelect: React.FC<SpecializationsSelectProps> = ({ onChange, value, id }) => {
    console.log(specializations)
    return (
        <InputWithChips id={id} value={value} options={specializations} onChange={onChange} />
    )
};

export default SpecializationsSelect;
