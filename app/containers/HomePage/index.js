/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import SectionCard from 'components/SectionCard';
import SectionInput from 'components/SectionInput';
import SectionLabel from 'components/SectionLabel';
import InputGroup from 'components/InputGroup';
import SectionButton from 'components/SectionButton';

import messages from './messages';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>

        <SectionCard>
          <H1><FormattedMessage {...messages.dashboardHeader} /></H1>
          <InputGroup>
            <SectionLabel htmlFor="sensor-time">Time</SectionLabel>
            <SectionInput id="sensor-time" type="text" placeholder="Enter a time" />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-date">Date</SectionLabel>
            <SectionInput id="sensor-date" type="date" placeholder="Enter a date" />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-latitude">Latitude</SectionLabel>
            <SectionInput id="sensor-latitude" type="text" placeholder="Enter the latitude" />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-longitude">Longitude</SectionLabel>
            <SectionInput id="sensor-longitude" type="text" placeholder="Enter the longitude" />
          </InputGroup>
          <SectionButton>Add Sensor</SectionButton>
        </SectionCard>

        <SectionCard>
          <H1><FormattedMessage {...messages.header} /></H1>
        </SectionCard>

      </article>
    );
  }
}
