import styled from 'styled-components';

const SectionRow = styled.div`
  background: #f7f7f7;

  display: flex;
  justify-content: space-between;

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  height: 75px;
  line-height: 75px;
  margin-bottom: 10px;

  &:hover {
    background: #fff;

    .icon-column {
      border-right-color: #7f7f7f;
      color: #ff8da1;
    }
  }
`;

export default SectionRow;
