import styled from 'styled-components';

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
   background: #7fdae7;
  }
`;

export default SectionLabel;
