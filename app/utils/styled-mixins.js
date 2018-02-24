/*
 * Styled-Components Mixins
 *
 * Mixin to handle all crossbrowser styles
 *
 */

export function placeholder(styles) {
  return `
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      ${styles}
    }
    ::-moz-placeholder { /* Firefox 19+ */
      ${styles}
    }
    :-ms-input-placeholder { /* IE 10+ */
      ${styles}
    }
    :-moz-placeholder { /* Firefox 18- */
      ${styles}
    }
  `;
}

export function borderRadius(style) {
  return `
    -webkit-border-radius: ${style};
    -moz-border-radius: ${style};
    -ms-border-radius: ${style};
    -o-border-radius: ${style};
    border-radius: ${style};
  `;
}
