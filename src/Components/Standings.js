import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Standings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState([]);
  const [selectLeagues, setSelectLeagues] = useState("eng.1");
  const [selectYear, setSelectYear] = useState(2021);
  const [logo, setLogo] = useState("");

  const url = `https://api-football-standings.azharimm.site/leagues/${selectLeagues}/standings?season=${selectYear}`;
  const urlleagueName = `https://api-football-standings.azharimm.site/leagues/${selectLeagues}`;

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();

    setIsLoading(false);
    setStandings(json.data.standings);
  };

  //Fetch league logos
  const fetchData2 = async () => {
    setIsLoading(true);
    const response = await fetch(urlleagueName);
    const json = await response.json();

    setIsLoading(false);
    setLogo(json.data.logos.light);
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, [selectLeagues, selectYear]);

  const changeHandler = (e) => {
    const selectedLeague = e.target.value;
    setSelectLeagues(selectedLeague);
  };

  return (
    <div className="main">
      <div className="league-dropdown">
        <select
          name="select-league"
          id="select-league"
          className="league-names"
          onChange={changeHandler}
          defaultValue={selectLeagues}
        >
          <option value={"arg.1"}>Argentine Liga Profesional de Fútbol</option>
          <option value={"aus.1"}>Australian A-League</option>
          <option value={"bra.1"}>Brazilian Serie A</option>
          <option value={"chn.1"}>Chinese Super League</option>
          <option value={"ned.1"}>Dutch Eredivisie</option>
          <option value={"eng.1"}>English Premier League</option>
          <option value={"fra.1"}>French Ligue 1</option>
          <option value={"ger.1"}>German Bundesliga</option>
          <option value={"idn.1"}>Indonesian Liga 1</option>
          <option value={"ita.1"}>Italian Serie A</option>
          <option value={"jpn.1"}>Japanese J League</option>
          <option value={"mys.1"}>Malaysian Super League</option>
          <option value={"mex.1"}>Mexican Liga BBVA MX</option>
          <option value={"por.1"}>Portuguese Liga</option>
          <option value={"rus.1"}>Russian Premier League</option>
          <option value={"sgp.1"}>Singaporean Premier League</option>
          <option value={"esp.1"}>Spanish Primera División</option>
          <option value={"tha.1"}>Thai Premier League</option>
          <option value={"tur.1"}>Turkish Super Lig</option>
          <option value={"uga.1"}>Ugandan Super League</option>
        </select>

        <select
          name="select-year"
          id="select-year"
          className="year-names"
          defaultValue={selectYear}
          onChange={(e) => setSelectYear(e.target.value)}
        >
          <option value="2011">2011-12</option>
          <option value="2012">2012-13</option>
          <option value="2013">2013-14</option>
          <option value="2014">2014-15</option>
          <option value="2015">2015-16</option>
          <option value="2016">2016-17</option>
          <option value="2017">2017-18</option>
          <option value="2018">2018-19</option>
          <option value="2019">2019-20</option>
          <option value="2020">2020-21</option>
          <option value="2021">2021-22</option>
        </select>
      </div>
      <div>
        {isLoading ? (
          <PulseLoader color="#3d195b" />
        ) : (
          <div className="standing-container">
            <img src={logo} className="league-logo" />
            <table style={{ borderSpacing: "30px 0" }}>
              <tr>
                <th>Rank</th>
                <th></th>
                <th>Club</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Pts</th>
              </tr>
              {standings.map((rank, index) => {
                return (
                  <tr key={index}>
                    <td className="rank-row">{index + 1} </td>
                    <td>
                      <img
                        className="team-logo"
                        src={rank.team.logos[0].href}
                      />
                    </td>
                    <td>
                      {" "}
                      <p>{rank.team.name}</p>
                    </td>
                    <td>{rank.stats[3].displayValue}</td>
                    <td>{rank.stats[0].displayValue}</td>
                    <td>{rank.stats[2].displayValue}</td>
                    <td>{rank.stats[1].displayValue}</td>

                    <td>{rank.stats[6].displayValue}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Standings;
