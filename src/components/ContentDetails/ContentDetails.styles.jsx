import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledVideoDiv = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledRelatedDiv = styled.div`
  width: 30%;
  height: 600px;
  overflow: scroll;
`;

export const StyledFlexDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;

    ${StyledVideoDiv}, ${StyledRelatedDiv} {
      width: 100%;
    }
  }
`;

export const StyledIFrame = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const StyledSnippetDiv = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SnippetTitle = styled(Typography).attrs(() => ({
  component: 'h2',
  variant: 'h5',
  gutterBottom: true,
}))`
  text-align: initial;
`;

export const SnippetDescription = styled(Typography).attrs(() => ({
  component: 'p',
  variant: 'body2',
  color: 'textSecondary',
}))`
  padding: 0px;
  box-sizing: border-box;
  && {
    color: ${({ theme }) => theme.cardText.color};
  }
`;
