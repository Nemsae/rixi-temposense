/*
 * HomePage Container
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import H1 from 'components/H1';
import SectionCard from 'components/SectionCard';
import SectionHeader from 'components/SectionHeader';
import SectionInput from 'components/SectionInput';
import SectionLabel from 'components/SectionLabel';
import InputGroup from 'components/InputGroup';
import SectionButton from 'components/SectionButton';

import { makeSelectSensors, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectInputs } from './selectors';
import { loadSensors } from '../App/actions';
import { changeInput } from './actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    inputs: {
      time: '',
      date: '',
      latitude: '',
      longitude: '',
    },
  }

  onChangeInput = (evt) => {
    const id = evt.target.id.split('-')[1];
    const value = evt.target.value;
    this.setState((prevState) => ({ ...prevState,
      inputs: { ...prevState.inputs,
        [id]: value,
      },
    }));
  }

  // onSubmitSensor = (evt) => {
  //   evt.preventDefault();
  //   console.log('this.state.inputs: ', this.state.inputs);
  // }

  render() {
    const { inputs } = this.props;
    return (
      <article>

        <SectionCard>
          <SectionHeader><FormattedMessage {...messages.dashboardHeader} /></SectionHeader>
          <InputGroup>
            <SectionLabel htmlFor="sensor-time">Time</SectionLabel>
            {/* <SectionInput id="sensor-time" type="text" placeholder="Enter a time" onChange={this.onChangeInput} value={inputs.time} /> */}
            <SectionInput id="sensor-time" type="text" placeholder="Enter a time" onChange={this.props.onChangeInput} value={inputs.time} />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-date">Date</SectionLabel>
            <SectionInput id="sensor-date" type="date" placeholder="Enter a date" onChange={this.props.onChangeInput} value={inputs.date} />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-latitude">Latitude</SectionLabel>
            <SectionInput id="sensor-latitude" type="text" placeholder="Enter the latitude" onChange={this.props.onChangeInput} value={inputs.latitude} />
          </InputGroup>
          <InputGroup>
            <SectionLabel htmlFor="sensor-longitude">Longitude</SectionLabel>
            <SectionInput id="sensor-longitude" type="text" placeholder="Enter the longitude" onChange={this.props.onChangeInput} value={inputs.longitude} />
          </InputGroup>
          <SectionButton onClick={this.props.onSubmitSensor}>Add Sensor</SectionButton>
        </SectionCard>

        <SectionCard>
          <H1><FormattedMessage {...messages.header} /></H1>
        </SectionCard>

      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  sensors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  inputs: PropTypes.any,
  onSubmitSensor: PropTypes.func,
  onChangeInput: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: (evt) => dispatch(changeInput(evt.target.id.split('-')[1], evt.target.value)),
    onSubmitSensor: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadSensors());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  sensors: makeSelectSensors(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  inputs: makeSelectInputs(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
