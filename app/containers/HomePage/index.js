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
import H2 from 'components/H2';
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
import Sensors from 'components/Sensors';

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
    //  message from store should be moved here
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.defaultMessage !== messages.loadingMessage.defaultMessage) {
      /* As long as we are not loading the location... proceed */
      if (nextProps.inputs.latitude.length && nextProps.inputs.longitude.length) {
        /* Validation Success - Change message to submit */
        this.props.onChangeMessage(messages.successMessage);
      } else {
        /* Validation Error - Change message to error */
        this.props.onChangeMessage(messages.errorMessage);
      }
    }
  }

  setTime = () => {
    const date = new Date();
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd = date.getDate().toString();
    const mmChars = mm.split('');
    const ddChars = dd.split('');
    const formattedDate = `${yyyy}-${(mmChars[1] ? mm : `0${mmChars[0]}`)}-${(ddChars[1] ? dd : `0${ddChars[0]}`)}`;
    this.props.onChangeInput(null, 'date', formattedDate);

    const minutes = date.getMinutes().toString();
    console.log('minutes: ', minutes);
    console.log('typeof minutes: ', typeof minutes);
    const hours = date.getHours();
    const time = `${hours}:${(minutes.length > 1 ? minutes : `0${minutes}`)}`;
    this.props.onChangeInput(null, 'time', time);

    const ms = date.getTime();
    console.log('ms: ', ms);
  }

  setLocation = () => {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      this.triggerLoadState();
      this.props.onChangeMessage(messages.loadingMessage);

      navigator.geolocation.getCurrentPosition((position) => {
        this.props.onChangeInput(null, 'latitude', position.coords.latitude.toString());
        this.props.onChangeInput(null, 'longitude', position.coords.longitude.toString());
        this.props.onChangeMessage(messages.successMessage);
        this.triggerLoadState();
      });
    } else {
      /* geolocation IS NOT available */
      this.props.onChangeMessage(messages.geoErrorMessage);
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
      <div>
        <article>

          <SectionCard>
            <SectionHeader><FormattedMessage {...messages.dashboardHeader} /></SectionHeader>
            <SectionRow>
              <IconColumn onClick={this.setTime}>
                <Icon className="fas fa-clock fa-2x" />
              </IconColumn>
              <InputColumn>
                <InputGroup>
                  <SectionLabel htmlFor="sensor-time">Time</SectionLabel>
                  <SectionInput id="sensor-time" type="text" placeholder="Enter a time (HH:MM)" onChange={this.props.onChangeInput} value={inputs.time} />
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

            <SectionRowEnd latitude={inputs.latitude} longitude={inputs.longitude} loading={this.state.loading} submitFxn={this.props.onSubmit}>
              <IconColumn>
                {
                  this.state.loading ?
                    <Icon className="fas fa-spinner fa-spin fa-2x" />
                    :
                    this.renderSubmitIcon()
                }
              </IconColumn>
              <InputColumn>
                <H2><FormattedMessage {...(this.props.message.id ? this.props.message : this.props.message.toObject())} /></H2>
              </InputColumn>
            </SectionRowEnd>
          </SectionCard>
        </article>

        <Sensors />
      </div>
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
  message: PropTypes.any,
  onSubmit: PropTypes.func,
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
    onChangeMessage: (messageObj) => dispatch(changeMessage(messageObj)),
    onSubmit: (evt) => {
      console.log('Sanity:onSubmit');
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
