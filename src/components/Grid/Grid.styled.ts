/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import rwd, { Breakpoint } from '../../utils/styles/rwd';
import { remCalc } from '../../utils/styles/utils';

interface GridContainerProps {
  fullWidth?: boolean;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  ${rwd[Breakpoint.SMALL]`
    max-width: ${remCalc(576)}rem;
  `}

  ${rwd[Breakpoint.MEDIUM]`
    max-width: ${remCalc(768)}rem;
  `}

  ${rwd[Breakpoint.LARGE]`
    max-width: ${remCalc(1024)}rem;
  `}

  ${rwd[Breakpoint.XLARGE]`
    max-width: ${remCalc(1264)}rem;
  `}

  ${rwd[Breakpoint.XXLARGE]`
    max-width: ${remCalc(1366)}rem;
  `}

  ${(props) => props.fullWidth && css`
    ${rwd[Breakpoint.SMALL]`
      max-width: none;
    `}

    ${rwd[Breakpoint.MEDIUM]`
      max-width: none;
    `}

    ${rwd[Breakpoint.LARGE]`
      max-width: none;
    `}

    ${rwd[Breakpoint.XLARGE]`
      max-width: none;
    `}

    ${rwd[Breakpoint.XXLARGE]`
      max-width: none;
    `}
  `}
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface GridColumnProps {
  center?: boolean;
}

export const GridColumn = styled.div<GridColumnProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${(props) => props.center && css`
    align-items: center;
  `}
`;
