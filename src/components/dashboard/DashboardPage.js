import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ownerActions from '../../actions/ownerActions';


class DashboardPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dashboard: { owners: [] }
    };
  }

  ownerRow(owner, index) {
    return <div key={index}>{owner.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.props.owners.map(this.ownerRow)}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  owners: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    owners: state.owners
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ownerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

