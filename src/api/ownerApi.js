const owners = [
  {
    id: 1,
    name: "Travis",
    nfc_win: "5-2",
    afc_win: "5-2",
    superbowl_win: "5-2",
    teams: [
      {
        id: 1,
        name: "Pittsburgh Steelers",
        pick: 1,
        vegas: 10.5,
        conference_odds: "11-2",
        superbowl_odds: "10-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 2,
        name: "Green Bay Packers",
        pick: 2,
        vegas: 10.5,
        conference_odds: "9-2",
        superbowl_odds: "7-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 3,
        name: "Jacksonville Jaguars",
        pick: 3,
        vegas: 7.5,
        conference_odds: "25-1",
        superbowl_odds: "60-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 4,
        name: "Atlanta Falcons",
        pick: 4,
        vegas: 7.5,
        conference_odds: "30-1",
        superbowl_odds: "70-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 5,
        name: "Indianapolis Colts",
        pick: 5,
        vegas: 9.5,
        conference_odds: "12-1",
        superbowl_odds: "25-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 6,
        name: "N.Y. Jets",
        pick: 6,
        vegas: 8,
        conference_odds: "30-1",
        superbowl_odds: "60-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 7,
        name: "N.Y. Giants",
        pick: 7,
        vegas: 8,
        conference_odds: "13-1",
        superbowl_odds: "25-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 8,
        name: "New Orleans Saints",
        pick: 8,
        vegas: 7,
        conference_odds: "30-1",
        superbowl_odds: "65-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 9,
        name: "Miami Dolphins",
        pick: 9,
        vegas: 7,
        conference_odds: "25-1",
        superbowl_odds: "70-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 10,
        name: "L.A. Rams",
        pick: 10,
        vegas: 7,
        conference_odds: "40-1",
        superbowl_odds: "80-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      }
    ]
  },
  {
    id: 2,
    name: "Boortz",
    "nfc_win": "3-1",
    "afc_win": "5-3",
    "superbowl_win": "2-1",
    "teams": [
      {
        id: 11,
        name: "Arizona Cardinals",
        pick: 1,
        vegas: 9.5,
        conference_odds: "13-2",
        superbowl_odds: "12-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 12,
        name: "New England Patriots",
        pick: 2,
        vegas: 10.5,
        conference_odds: "13-4",
        superbowl_odds: "7-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 13,
        name: "Cincinnati Bengals",
        pick: 3,
        vegas: 7,
        conference_odds: "17-2",
        superbowl_odds: "20-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 14,
        name: "Minnesota Vikings",
        pick: 4,
        vegas: 9.5,
        conference_odds: "12-1",
        superbowl_odds: "30-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 15,
        name: "Denver Broncos",
        pick: 5,
        vegas: 9,
        conference_odds: "7-1",
        superbowl_odds: "15-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 16,
        name: "Washington Redskins",
        pick: 6,
        vegas: 7.5,
        conference_odds: "20-1",
        superbowl_odds: "50-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 17,
        name: "Houston Texans",
        pick: 7,
        vegas: 8.5,
        conference_odds: "22-1",
        superbowl_odds: "40-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 18,
        name: "Detroit Lions",
        pick: 8,
        vegas: 7.5,
        conference_odds: "35-1",
        superbowl_odds: "80-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 19,
        name: "San Diego Chargers",
        pick: 9,
        vegas: 7,
        conference_odds: "38-1",
        superbowl_odds: "80-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 20,
        name: "Chicago Bears",
        pick: 10,
        vegas: 7.5,
        conference_odds: "30-1",
        superbowl_odds: "70-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      }
    ]
  },
  {
    id: 3,
    name: "DB",
    "nfc_win": "2-1",
    "afc_win": "7-2",
    "superbowl_win": "3-1",
    "teams": [
      {
        id: 21,
        name: "Seattle Seahawks",
        pick: 1,
        vegas: 10.5,
        conference_odds: "23-5",
        superbowl_odds: "8-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 22,
        name: "Carolina Panthers",
        pick: 2,
        vegas: 10.5,
        conference_odds: "6-1",
        superbowl_odds: "10-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 23,
        name: "Kansas City Chiefs",
        pick: 3,
        vegas: 9.5,
        conference_odds: "10-1",
        superbowl_odds: "25-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 24,
        name: "Oakland Raiders",
        pick: 4,
        vegas: 8.5,
        conference_odds: "15-1",
        superbowl_odds: "30-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 25,
        name: "Dallas Cowboys",
        pick: 5,
        vegas: 9.5,
        conference_odds: "15-1",
        superbowl_odds: "30-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 26,
        name: "Tampa Bay Bucaneers",
        pick: 6,
        vegas: 7.5,
        conference_odds: "40-1",
        superbowl_odds: "75-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 27,
        name: "Baltimore Ravens",
        pick: 7,
        vegas: 8.5,
        conference_odds: "17-1",
        superbowl_odds: "35-1",
        wins: 2,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 28,
        name: "Buffalo Bills",
        pick: 8,
        vegas: 8,
        conference_odds: "30-1",
        superbowl_odds: "75-1",
        wins: 0,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 29,
        name: "Philadelphia Eagles",
        pick: 9,
        vegas: 7,
        conference_odds: "35-1",
        superbowl_odds: "70-1",
        wins: 1,
        playoff_wins: 0,
        conference_wins: 0,
        superbowl_wins: 0
      },
      {
        id: 30,
        name: "Tenessee Titans",
        pick: 10,
        vegas: 7.5,
        conference_odds: "50-1",
        superbowl_odds: "100-1",
        wins: 1,
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
