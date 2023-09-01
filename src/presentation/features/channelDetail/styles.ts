import styled from '@emotion/styled';

export const LeftSectionWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '70%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});

export const RightSectionWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '30%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});
