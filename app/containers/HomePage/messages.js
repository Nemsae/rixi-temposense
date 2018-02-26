/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Rixi TempoSense',
  },
  dashboardHeader: {
    id: 'app.components.HomePage.dashboard.header',
    defaultMessage: 'Dashboard',
  },
  loadingMessage: {
    id: 'app.components.HomePage.loading.message',
    defaultMessage: 'Location loading...',
  },
  successMessage: {
    id: 'app.components.HomePage.success.message',
    defaultMessage: 'Submit',
  },
  errorMessage: {
    id: 'app.components.HomePage.error.message',
    defaultMessage: 'Latitude & Longitude required!',
  },
  geoErrorMessage: {
    id: 'app.components.HomePage.geoerror.message',
    defaultMessage: 'Geolocation not supported by this browser.',
  },
});
