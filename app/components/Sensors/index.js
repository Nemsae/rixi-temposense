import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import IconColumn from 'components/IconColumn';
import Icon from 'components/Icon';
import InputColumn from 'components/InputColumn';
import SectionCard from 'components/SectionCard';
import SectionHeader from 'components/SectionHeader';
import SectionRow from 'components/SectionRow';
import SectionWrapper from 'components/SectionWrapper';

import messages from './messages';

function Sensors(props) {
  return (
    <SectionWrapper>
      <SectionCard>
        <SectionHeader><FormattedMessage {...messages.header} /></SectionHeader>
        <SectionRow>
          <IconColumn>
            <Icon className="fas fa-clock fa-2x" />
          </IconColumn>
          <InputColumn>
          </InputColumn>
        </SectionRow>
      </SectionCard>
    </SectionWrapper>
  );
}

Sensors.propTypes = {};

export default Sensors;
