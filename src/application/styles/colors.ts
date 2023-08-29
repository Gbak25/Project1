import { css } from '@emotion/react';

export const palette = {
  success: '#52c41a',
  info: '#1677ff',
  warning: '#faad14',
  error: '#f5222d',
  neutral: {
    _1: '#f2f4f8',
    _2: '#dde1e6',
    _3: '#c1c7cd',
    _4: '#a2a9b0',
    _5: '#878d96',
    _6: '#697077',
    _7: '#4d5358',
    _8: '#343a3f',
    _9: '#21272a',
    _10: '#080e11',
  },
  primary: {
    _1: '#fff6e9',
    _2: '#ffe7c7',
    _3: '#ffd5ac',
    _4: '#ffc092',
    _5: '#ffa675',
    _6: '#ff8c50',
    _7: '#ca683d',
    _8: '#8b3f26',
    _9: '#571e13',
    _10: '#410f0b',
  },
} as const;

export const colors = css`
  .bg {
    &-surface-lowest {
      background-color: #fcfcfc;
    }
    &-surface-low {
      background-color: #f7f7f7;
    }
    &-surface-middle {
      background-color: #f2f2f2;
    }
    &-surface-deem {
      background-color: rgba(0, 0, 0, 0.4);
    }
    &-success {
      background-color: ${palette.success};
    }
    &-info {
      background-color: ${palette.info};
    }
    &-warning {
      background-color: ${palette.warning};
    }
    &-error {
      background-color: ${palette.error};
    }
  }

  .text {
    &-success {
      color: ${palette.success};
    }
    &-info {
      color: ${palette.info};
    }
    &-warning {
      color: ${palette.warning};
    }
    &-error {
      color: ${palette.error};
    }
  }
`;
