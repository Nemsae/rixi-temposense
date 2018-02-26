import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import ReactTooltip from 'react-tooltip';

import { convertDate } from 'utils/date';

// import IconColumn from 'components/IconColumn';
import InputColumnChart from 'components/InputColumnChart';
import SectionCard from 'components/SectionCard';
import SectionHeader from 'components/SectionHeader';
import SectionRowChart from 'components/SectionRowChart';
import SectionWrapper from 'components/SectionWrapper';

import messages from './messages';
import Icon from './Icon';
import InfoBlock from './InfoBlock';
import InfoBlockHighlight from './InfoBlockHighlight';
import InfoWrapper from './InfoWrapper';

//  TODO: Component: <Chart /> <ChartInfo />

function Sensors(props) {
  // console.log('<Sensors />    props: ', props);
  let sensorRows = '';

  if (props.sensors) {
    sensorRows = props.sensors.map((sensor) => {
      const sensorDate = convertDate(false, sensor.current_time * 1000);
      const simulationHours = sensor.half_life * (60 * 60 * 1000);
      const simulationDate = convertDate(false, (sensor.current_time * 1000) + simulationHours);
      const hourlyData = sensor.hourly_data.slice(0, sensor.half_life);
      //  TODO use reduce and accumlator to build object with allHourlyTemps and allHourlyTimes
      const allHourlyTemps = hourlyData.map((hour) => hour.temperature);
      const allHourlyTimes = hourlyData.map((hour) => hour.time);
      return (
        <SectionRowChart key={sensor._id}>
          <InputColumnChart>
            <InfoWrapper>
              <InfoBlock data-tip={`Simulation started on ${new Date(sensorDate.ms)}`}><Icon className="fas fa-stopwatch" /> {`${sensorDate.formattedDate} @ ${sensorDate.formattedTime}`}</InfoBlock>
              <InfoBlock data-tip="Location in latidue and longitude"><Icon className="fas fa-map-marker" />{sensor.latitude.toFixed(4)}, {sensor.longitude.toFixed(4)}</InfoBlock>
              <InfoBlock data-tip="Current temperature"><Icon className="fas fa-thermometer-half" />{sensor.hourly_data.reverse()[0].temperature}</InfoBlock>
              <InfoBlock data-tip="Remove this simulation" onClick={() => props.delete(sensor._id)}><Icon className="fas fa-trash" /></InfoBlock>
            </InfoWrapper>
            <InfoWrapper>
              <InfoBlockHighlight data-tip={`Simulation time: ${new Date(simulationDate.ms)}`}><Icon className="fas fa-stopwatch" /> {`${simulationDate.formattedDate} @ ${simulationDate.formattedTime}`}</InfoBlockHighlight>
              {/* <InfoBlock>Latitude: {sensor.latitude.toFixed(4)}</InfoBlock> */}
              {/* <InfoBlock>Average:</InfoBlock> */}
            </InfoWrapper>

            <VictoryChart domainPadding={20}>
              <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                label={'Time (hours)'}
                tickValues={allHourlyTimes}
                tickFormat={() => ('')}
              />
              <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`${x.toFixed(1)} F`)}
              />

              <VictoryLine
                data={hourlyData}
                x="time"
                y="temperature"
              />
            </VictoryChart>

          </InputColumnChart>
          <ReactTooltip />
        </SectionRowChart>
      );
    });
  }

  return (
    <SectionWrapper>
      <SectionCard>
        <SectionHeader><FormattedMessage {...messages.header} /></SectionHeader>
        {sensorRows}
      </SectionCard>
    </SectionWrapper>
  );
}

Sensors.propTypes = {
  sensors: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  delete: PropTypes.func,
};

export default Sensors;
