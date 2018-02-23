import styled from 'styled-components';

const UIButton = styled.a`
  background: #000;
  color: #fff;

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
  white-space: nowrap;
  -webkit-appearance: none;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    text-decoration: none;
  }
`;

export default UIButton;
