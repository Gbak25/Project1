import styled from '@emotion/styled';

export const VideoCardWrapper = styled.div({
  width: '32.3%',
  position: 'relative',
  cursor: 'pointer',
  height: 300,

  '@media (max-width: 600px)': {
    width: '100%',
  },
});

export const VideoCardImageWrapper = styled.div({
  position: 'relative',
  width: '100%',
  height: 180,
  borderRadius: 10,
});

export const VideoCardImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 10,
});
