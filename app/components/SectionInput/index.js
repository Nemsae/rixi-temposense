import styled from 'styled-components';

import { placeholder } from 'utils/styled-mixins';

const SectionLabel = styled.input`
  flex-grow: 1;
  max-width: 200px;

  padding: 3px 4px;
  border: 1px solid #D7DBDF;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;

  &::selection {
   background: #000;
   color: #fff;
  }

  ${placeholder(`
    font-size: 12px;
    color: pink;
  `)}
`;

export default SectionLabel;
