import NormalH1 from 'components/H1';

const SectionHeader = NormalH1.extend`
  ${'' /* background: #323232; */}
  background: #167284;
  color: #fff;

  height: 70px;
  line-height: 70px;
  text-align: left;

  padding-left: 35px;
  margin-bottom: 0px;
  margin-top: 0px;

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export default SectionHeader;
