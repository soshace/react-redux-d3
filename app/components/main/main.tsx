import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import {ChartEntry} from '../../../types/data'

interface AppProps {
    chartEntries: ChartEntry[];
    dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
    render() {
        const { chartEntries, dispatch } = this.props;

        return (
            <div className="chart">
            </div>
        );
    }
}

const mapStateToProps = state => ({
    chartEntries: state.chartEntries
});

export default connect(mapStateToProps)(App);