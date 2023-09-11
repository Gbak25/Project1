import styled from '@emotion/styled';

export const BannerWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  borderRadius: '10px',
  height: '224px',
  overflow: 'hidden',

  ':after': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: 'inherit',
    borderRadius: '10px',
    background:
      'linear-gradient(90deg, rgba(33,39,42,1) 0%, rgba(33,39,42,1) 71%, rgba(249,249,249,0) 100%)',
  },

  '.txtBox': {
    padding: '20px',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  '.title': {
    color: 'white',
    fontSize: '32px',
  },

  '.subTitle': {
    color: 'white',
    fontSize: '20px',
  },

  '@media (max-width: 600px)': {
    height: '113px',

    '.title': {
      fontSize: '14px',
    },

    '.subTitle': {
      fontSize: '12px',
    },
  },
});
