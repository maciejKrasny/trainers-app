import React, { Suspense } from "react";
import { Container, Category, ContentContainer } from "./TextWithIcon.styled";

interface TextWithIconProps {
    category: string;
    content: React.ReactElement;
    icon: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({ category, content, icon }) => {
    const Icon = React.lazy(() => import(`@material-ui/icons/${icon}`));
    return (
        <Suspense fallback={<></>}>
            <Container>
                <Icon style={{fontSize: 25}} />
                <Category>{category}:</Category>
                <ContentContainer>{content}</ContentContainer>
            </Container>
        </Suspense>
    )
};

export default TextWithIcon;
