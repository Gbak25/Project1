import styled from '@emotion/styled';

export const VideoWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '80%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});

export const RecommendedWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '20%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});
