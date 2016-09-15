const owners = [
  {
    name: "Travis",
    teams: [
      {
        name: "Pittsburgh Steelers",
        pick: 1,
        vegas: 10.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Green Bay Packers",
        pick: 2,
        vegas: 10.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Jacksonville Jaguars",
        pick: 3,
        vegas: 7.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Atlanta Falcons",
        pick: 4,
        vegas: 7.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Indianapolis Colts",
        pick: 5,
        vegas: 9.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "N.Y. Jets",
        pick: 6,
        vegas: 8,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "N.Y. Giants",
        pick: 7,
        vegas: 8,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "New Orleans Saints",
        pick: 8,
        vegas: 7,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Miami Dolphins",
        pick: 9,
        vegas: 7,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "L.A. Rams",
        pick: 10,
        vegas: 7,
        wins: 7.5,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      }
    ]
  },
  {
    name: "Boortz",
    teams: [
      {
        name: "Arizona Cardinals",
        pick: 1,
        vegas: 9.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "New England Patriots",
        pick: 2,
        vegas: 10.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Minnesota Vikings",
        pick: 3,
        vegas: 9.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Denver Broncos",
        pick: 4,
        vegas: 9,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Washington Redskins",
        pick: 5,
        vegas: 7.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Houston Texans",
        pick: 6,
        vegas: 8.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Detroit Lions",
        pick: 7,
        vegas: 7.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "San Diego Chargers",
        pick: 8,
        vegas: 7,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Miami Dolphins",
        pick: 9,
        vegas: 7,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Chicago Bears",
        pick: 10,
        vegas: 7.5,
        wins: 7.5,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      }
    ]
  },
  {
    name: "DB",
    teams: [
      {
        name: "Seattle Seahawks",
        pick: 1,
        vegas: 10.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Carolina Panthers",
        pick: 2,
        vegas: 10.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Kansas City Chiefs",
        pick: 3,
        vegas: 9.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Oakland Raiders",
        pick: 4,
        vegas: 8.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Dallas Cowboys",
        pick: 5,
        vegas: 9.5,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Tampa Bay Bucaneers",
        pick: 6,
        vegas: 7.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Baltimore Ravens",
        pick: 7,
        vegas: 8.5,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Buffalo Bills",
        pick: 8,
        vegas: 8,
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Philadelphia Eagles",
        pick: 9,
        vegas: 7,
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        name: "Tenessee Titans",
        pick: 10,
        vegas: 7.5,
        wins: 5.5,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      }
    ]
  }
];

class OwnerApi {
  static getAllOwners() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], owners));
    });
  }
}

export default OwnerApi;
