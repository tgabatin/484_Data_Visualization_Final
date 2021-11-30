import React from 'react';
import {Grid, Image} from 'semantic-ui-react';

/**
 * A class that will house the landing page for the world happiness visualization chart.
 */
// Note: The 3D Globe can be tested here
class Landing extends React.Component {
    render() {
        /**
         * Styling components for the landing page
         */
        const landingStyle = {
            paddingBottom: '50px',
            paddingTop: '50px'
        }
        return(
            <Grid style={landingStyle} id='landing=page' container centered>
                <Grid.Column width={11}>
                    <h2>World Happiness Data Visualization</h2>
                </Grid.Column>
            </Grid>
        );
    }
}
// Exports the page to be used as a component in the primary App
export default Landing;