import NormalUIButton from 'components/UIButton';

import { borderRadius } from 'utils/styled-mixins';

const IconButton = NormalUIButton.extend`
  display: flex;
  align-items: center;

  background: #000;
  color: #fff;

  height: auto;
  line-height: normal;
  padding: 0 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  ${borderRadius('8px')}

  &:hover {
    background: #fff;
    color: #000;
    text-decoration: none;
  }

  p {
    margin-left: 8px;
  }
`;

export default IconButton;
