import NormalUIButton from 'components/UIButton';

import { borderRadius } from 'utils/styled-mixins';

const IconColumn = NormalUIButton.extend.attrs({ className: 'icon-column' })`
  display: flex;
  align-items: center;

  background: transparent;
  color: #6BD9E7;

  height: auto;
  line-height: normal;
  width: 20%;
  padding: 0 15px;

  border: none;
  ${borderRadius('0px')}
  border-right: 2px solid #999999;

  transition: background .5s, color .5s, border-right-color .5s;

  &:hover {
    background: #6BD9E7;
    color: #fff !important;
    border-right-color: #6BD9E7 !important;
    text-decoration: none;
  }

  p {
    margin-left: 8px;
  }
`;

export default IconColumn;
