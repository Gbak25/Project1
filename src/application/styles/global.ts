import { css } from '@emotion/react';
import { colors, palette } from './colors';
import { typo } from './typo';

export const globalStyles = css`
  ${typo}
  ${colors}

  html {
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    color: ${palette.neutral._9};
  }
  body {
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .mb {
    &-12 {
      margin-bottom: 12px;
    }
  }
`;
