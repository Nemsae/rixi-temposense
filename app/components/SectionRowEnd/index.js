import NormalSectionRow from 'components/SectionRow';

const SectionRowEnd = NormalSectionRow.extend`
  ${'' /* background: gradient; */}
  background: #323232;
  ${'' /* background: #b2b2b2; */}
  ${'' /* background: #cccccc; */}
  color: #fff;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  transition: background 1s, border-right-color 1s, color 1s;

  .icon-column {
    border-right-color: #fff;
    color: #ff8da1;
  }

  &:hover {
    background: #fff;
    color: #000;

    .icon-column {
      border-right-color: #7f7f7f;
      color: #ff8da1;
    }
  }
`;

export default SectionRowEnd;
