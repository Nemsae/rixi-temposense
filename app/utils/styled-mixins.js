
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

// export function placeholder(styles) {
//   const properties = Object.keys(styles);
//   const css = properties.map((property) => (`${property}: ${styles[property]};\n`)).join('');
//   return `
//     ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
//       ${css}
//     }
//     ::-moz-placeholder { /* Firefox 19+ */
//       ${css}
//     }
//     :-ms-input-placeholder { /* IE 10+ */
//       ${css}
//     }
//     :-moz-placeholder { /* Firefox 18- */
//       ${css}
//     }
//   `;
// }
