import React, { PropTypes } from 'react';

const Team = ({team}) => {
  return (
    <tr>
      <td>{team.pick}</td>
      <td>{team.name}</td>
      <td>{team.wins}</td>
      <td>{team.vegas}</td>
      <td>{team.playoff_wins}</td>
      <td>{team.conference_wins}</td>
      <td>{team.conference_odds}</td>
      <td>{team.superbowl_wins}</td>
      <td>{team.superbowl_odds}</td>
    </tr>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired
};

export default Team;
