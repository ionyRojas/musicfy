import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import emotionReset from 'emotion-reset';

/**
 * This function is normalazing and generating some default Global css values for the App
 * @return {React.Node} Global emotion component with the default css options
 */
const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionReset}
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
        box-sizing: border-box;
        font-family: Helvetica, Arial;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      p {
        line-height: normal;
      }
    `}
  />
);

export default GlobalStyles;
