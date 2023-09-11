import styled from '@emotion/styled';

export const Item = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '.txtBox': {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },

  '.title': {
    fontSize: '20px',
    fontWeight: '500',
  },

  '.description': {
    fontSize: '48px',
    fontWeight: '600',
  },

  '.imgBox': {
    height: '488px',
  },

  '@media (max-width: 600px)': {
    width: '100%',

    '.txtBox': {
      padding: '16px',
    },

    '.title': {
      fontSize: '12px',
    },

    '.description': {
      fontSize: '24px',
    },

    '.imgBox': {
      height: '234px',
    },
  },
});
