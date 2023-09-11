import styled from '@emotion/styled';

export const VideoWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '60%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});

export const RecommendedContainer = styled.div({
  width: '35%',

  '@media (max-width: 600px)': {
    width: '100%',
  },
});
