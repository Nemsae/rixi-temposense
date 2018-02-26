import styled from 'styled-components';

import { placeholder, borderRadius } from 'utils/styled-mixins';

const SectionLabel = styled.input`
  flex-grow: 1;

  width: 100%;
  max-width: 200px;
  padding: 3px 4px;

  ${borderRadius('0px')}

  font-size: 14px;

  border: none;
  border-bottom: 1px solid #D8D8D8;
  background: none;
  border-radius: 0px;
  color: #6BD9E7;
  font-size: 14px;

  &:focus {
    ${'' /* border-color: #FAD2D1;; */}
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }

  &::selection {
   background: #6BD9E7;
   color: #fff;
  }

  ${placeholder(`
    font-size: 12px;
    color: #6BD9E7;
  `)}
`;

export default SectionLabel;
