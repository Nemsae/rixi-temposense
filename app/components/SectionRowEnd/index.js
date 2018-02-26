import React from 'react';
import PropTypes from 'prop-types';

import NormalSectionRow from 'components/SectionRow';

const SectionRowEnd = (props) => {
  let enableSubmit = false;

  if (!props.loading) {
    enableSubmit = props.latitude.length && props.longitude.length;
  }

  const SectionRowEndPrimitive = NormalSectionRow.extend`
    background: #167284;
    color: #fff;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    transition: background .5s, border-right-color .5s, color .5s;

    .icon-column {
      border-right-color: #fff;
      color: #fff;
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
        border-right-color: #6BD9E7;
        background: #6BD9E7;
        color: #fff;
      }
    }

    ${enableSubmit && `
      cursor: pointer;
      // color: #6BD9E7;

      &:hover {
        background: #6BD9E7;
        color: #fff;

        .icon-column {
          background: #6BD9E7;
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
  );
};

SectionRowEnd.propTypes = {
  children: PropTypes.node.isRequired,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  loading: PropTypes.bool,
  submitFxn: PropTypes.func,
};

export default SectionRowEnd;
