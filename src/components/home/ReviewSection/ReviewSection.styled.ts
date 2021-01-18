import styled from 'styled-components';
import {Typography} from "@material-ui/core";

export const ReviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 1.5rem;
`;

export const AddReviewItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`;

export const AddTextReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey01};
  padding-bottom: 1.5rem;
}
`;

export const AddReviewLabel = styled(Typography)`
    :last-child {
      margin-bottom: 0.25rem;
    }
`;

export const ReviewsContainer = styled.div`
  padding: 1.5rem;
  width: calc(100% - 3rem);
`;