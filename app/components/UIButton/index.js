import styled from 'styled-components';

import { borderRadius } from 'utils/styled-mixins';

const UIButton = styled.a`
  background: #fff;
  color: #000;

  border: 1px solid #000;
  ${borderRadius('3px')};

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-shadow: none;

  display: inline-block;
  height: 38px;
  cursor: pointer;

  padding: 0 40px;

  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;

  white-space: nowrap;
  -webkit-appearance: none;

  &:hover {
    background: #000;
    color: #fff;
    text-decoration: none;
  }
`;

export default UIButton;
