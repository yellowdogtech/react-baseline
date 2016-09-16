import React, { PropTypes } from 'react';
import Team from './Team';

const Owner = ({owner}) => {

  const ownerTotals = owner.teams.reduce((a, b) => {
    return {
      wins: a.wins + b.wins,
      playoff_wins: a.playoff_wins + b.playoff_wins,
      conference_wins: a.conference_wins + b.conference_wins,
      superbowl_wins: a.superbowl_wins + b.superbowl_wins,
      vegas: a.vegas + b.vegas
    };
  });

  const getTotalPoints = ownerTotals => {
    return ownerTotals.wins
    + (ownerTotals.playoff_wins * 3)
    + (ownerTotals.conference_wins * 7)
    + (ownerTotals.superbowl_wins * 12);
  };

  return (
    <div>
      <h3>{owner.name}: {getTotalPoints(ownerTotals)}</h3>
      <div>
        <h6>Vegas Predictions</h6>
        <table className="table">
          <thead>
            <tr>
              <th>Wins</th>
              <th>AFC Odds</th>
              <th>NFC Odds</th>
              <th>SB Odds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ownerTotals.vegas}</td>
              <td>{owner.afc_win}</td>
              <td>{owner.nfc_win}</td>
              <td>{owner.superbowl_win}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Pick</th>
              <th>Team</th>
              <th>Wins</th>
              <th>Vegas Wins</th>
              <th>Playoff Wins (x3)</th>
              <th>Conference Wins (x7)</th>
              <th>Conference Odds</th>
              <th>Super Bowl Wins (x12)</th>
              <th>Superbowl Odds</th>
            </tr>
          </thead>
          <tbody>
          {
            owner.teams.map(team =>
              <Team key={team.id} team={team}/>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

Owner.propTypes = {
  owner: PropTypes.object.isRequired
};

export default Owner;
