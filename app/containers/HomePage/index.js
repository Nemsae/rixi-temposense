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
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import IconColumn from 'components/IconColumn';
import InputGroup from 'components/InputGroup';
import InputColumn from 'components/InputColumn';
import SectionButton from 'components/SectionButton';
import SectionCard from 'components/SectionCard';
import SectionHeader from 'components/SectionHeader';
import SectionInput from 'components/SectionInput';
import SectionLabel from 'components/SectionLabel';
import SectionRow from 'components/SectionRow';
import SectionRowEnd from 'components/SectionRowEnd';

import { makeSelectSensors, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectInputs, makeSelectMessage } from './selectors';
import { loadSensors } from '../App/actions';
import { changeInput, changeMessage } from './actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    loading: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== 'Location loading...') {
      /* As long as we are not loading the location... proceed */
      if (nextProps.inputs.latitude.length && nextProps.inputs.longitude.length) {
        /* Validation Success - Change message to submit */
        this.props.onChangeMessage('Submit');
      } else {
        /* Validation Error - Change message to error */
        this.props.onChangeMessage('Latitude & Longitude required!');
      }
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!nextProps.inputs.latitude.length || !nextProps.inputs.longitude.length) {
  //     console.log('Sanity:0');
  //     if (!this.state.loading && !nextState.loading) {
  //       console.log('Sanity:1');
  //       this.props.onChangeMessage('Latitude & Longitude required!');
  //     } else {
  //       console.log('Sanity:2');
  //       // this.props.onChangeMessage('Latitude & Longitude required!');
  //     }
  //   } else {
  //     console.log('Sanity:3');
  //     this.props.onChangeMessage('Submit');
  //   }
  //   return true;
  // }

  setLocation = () => {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      this.triggerLoadState();
      this.props.onChangeMessage('Location loading...');

      navigator.geolocation.getCurrentPosition((position) => {
        this.props.onChangeInput(null, 'latitude', position.coords.latitude.toString());
        this.props.onChangeInput(null, 'longitude', position.coords.longitude.toString());
        this.props.onChangeMessage('Submit');
        this.triggerLoadState();
      });
    } else {
      /* geolocation IS NOT available */
      this.props.onChangeMessage('Geolocation not supported by this browser.');
    }
  }

  triggerLoadState = () => {
    this.setState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
  }

  renderSubmitIcon = () => {
    if (this.props.inputs.latitude.length && this.props.inputs.longitude.length) {
      /* Validation - required location inputs filled */
      return <Icon className="fas fa-check fa-2x" />;
    }
    return <Icon className="fas fa-exclamation-circle fa-2x" />;
  }

  render() {
    const { inputs } = this.props;
    return (
      <article>

        <SectionCard>
          <SectionHeader><FormattedMessage {...messages.dashboardHeader} /></SectionHeader>
          <SectionRow>
            <IconColumn>
              <Icon className="fas fa-clock fa-2x" />
            </IconColumn>
            <InputColumn>
              <InputGroup>
                <SectionLabel htmlFor="sensor-time">Time</SectionLabel>
                {/* <SectionInput id="sensor-time" type="text" placeholder="Enter a time" onChange={this.onChangeInput} value={inputs.time} /> */}
                <SectionInput id="sensor-time" type="text" placeholder="Enter a time" onChange={this.props.onChangeInput} value={inputs.time} />
              </InputGroup>
              <InputGroup>
                <SectionLabel htmlFor="sensor-date">Date</SectionLabel>
                <SectionInput id="sensor-date" type="date" placeholder="Enter a date" onChange={this.props.onChangeInput} value={inputs.date} />
              </InputGroup>
            </InputColumn>
          </SectionRow>

          <SectionRow>
            <IconColumn onClick={this.setLocation}>
              <Icon className="fas fa-map-marker-alt fa-2x" />
            </IconColumn>
            <InputColumn>
              <InputGroup>
                <SectionLabel htmlFor="sensor-latitude">Latitude</SectionLabel>
                <SectionInput id="sensor-latitude" type="text" placeholder="Enter the latitude" onChange={this.props.onChangeInput} value={inputs.latitude} />
              </InputGroup>
              <InputGroup>
                <SectionLabel htmlFor="sensor-longitude">Longitude</SectionLabel>
                <SectionInput id="sensor-longitude" type="text" placeholder="Enter the longitude" onChange={this.props.onChangeInput} value={inputs.longitude} />
              </InputGroup>
            </InputColumn>
          </SectionRow>

          <SectionRowEnd>
            <IconColumn>
              {
                this.state.loading ?
                  <Icon className="fas fa-spinner fa-spin fa-2x" />
                  :
                  this.renderSubmitIcon()
              }
            </IconColumn>
            <InputColumn>
              <h3>{ this.props.message }</h3>
              {/* <SectionButton onClick={this.props.onSubmitSensor}>Add Sensor</SectionButton> */}
            </InputColumn>
          </SectionRowEnd>

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
  message: PropTypes.string,
  onSubmitSensor: PropTypes.func,
  onChangeInput: PropTypes.func,
  onChangeMessage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeInput: (evt) => dispatch(changeInput(evt.target.id.split('-')[1], evt.target.value)),
    onChangeInput: (evt, id, value) => {
      if (evt !== null) {
        dispatch(changeInput(evt.target.id.split('-')[1], evt.target.value));
      } else {
        dispatch(changeInput(id, value));
      }
    },
    onChangeMessage: (message) => dispatch(changeMessage(message)),
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
  message: makeSelectMessage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
