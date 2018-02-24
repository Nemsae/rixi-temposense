import NormalUIButton from 'components/UIButton';

import { borderRadius } from 'utils/styled-mixins';

const IconColumn = NormalUIButton.extend.attrs({ className: 'icon-column' })`
  display: flex;
  align-items: center;

  background: transparent;
  color: pink;

  height: auto;
  line-height: normal;
  width: 20%;
  padding: 0 15px;

  border: none;
  ${borderRadius('0px')}
  border-right: 2px solid #999999;

  transition: background 1s, color 1s, border-right-color 1s; 

  &:hover {
    background: #ff8da1;
    color: #fff !important;
    border-right-color: #ff8da1 !important;
    text-decoration: none;
  }

  p {
    margin-left: 8px;
  }
`;

export default IconColumn;
