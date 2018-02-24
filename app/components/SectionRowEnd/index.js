import React from 'react';
import PropTypes from 'prop-types';

import NormalSectionRow from 'components/SectionRow';

const SectionRowEnd = (props) => {
  let enableSubmit = false;

  if (!props.loading) {
    enableSubmit = props.latitude.length && props.longitude.length;
  }

  const SectionRowEndPrimitive = NormalSectionRow.extend`
    background: #323232;
    color: #fff;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    transition: background 1s, border-right-color 1s, color 1s;

    .icon-column {
      border-right-color: #fff;
      color: #ff8da1;
      cursor: default;
      ${enableSubmit && `
        cursor: pointer;
        border-right-color: #fff;
      `}
    }

    &:hover {
      background: #fff;
      color: #000;

      .icon-column {
        border-right-color: #ff8da1;
        background: #ff8da1;
        color: #fff;
      }
    }

    ${enableSubmit && `
      cursor: pointer;
      // color: #ff8da1;

      &:hover {
        background: #ff8da1;
        color: #fff;

        .icon-column {
          background: #ff8da1;
          border-right-color: #fff !important;
          color: #fff;
        }
      }
    `}
  `;

  return (
    enableSubmit ?
      <SectionRowEndPrimitive onClick={props.submitFxn}>{ props.children }</SectionRowEndPrimitive>
      :
      <SectionRowEndPrimitive>{ props.children }</SectionRowEndPrimitive>
  )
};

SectionRowEnd.propTypes = {
  children: PropTypes.node.isRequired,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  loading: PropTypes.bool,
  submitFxn: PropTypes.func,
};

export default SectionRowEnd;
