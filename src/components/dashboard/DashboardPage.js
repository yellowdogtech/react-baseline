import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class DashboardPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dashboard: { owners: [] }
    };
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  owners: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default DashboardPage;
