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
  h6 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
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

  .react-tabs {
    margin-top: 32px;
    width: 100%;
  }

  .react-tabs__tab-list {
    border: none;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .react-tabs__tab {
    padding: 10px 24px;
    background-color: #f2f4f8;
    text-align: center;
    color: #c1c7cd;
    border-radius: 0;
    width: 50%;
  }

  .react-tabs__tab--selected {
    border: none;
    border-radius: 0;
    background-color: #ff8c50;
    color: white;
  }

  .mt {
    &-12 {
      margin-top: 12px;
    }
    &-16 {
      margin-top: 16px;
    }
    &-26 {
      margin-top: 26px;
    }
    &-42 {
      margin-top: 42px;
    }
  }

  .mb {
    &-12 {
      margin-bottom: 12px;
    }
    &-16 {
      margin-bottom: 16px;
    }
  }

  .mr {
    &-16 {
      margin-right: 16px;
    }
  }

  .shorten-sentence {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`;
