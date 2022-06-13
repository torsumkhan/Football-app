import React, { useState, useEffect } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState([]);
  const [selectLeagues, setSelectLeagues] = useState("eng.1");
  const [selectYear, setSelectYear] = useState(2019);

  const url = `https://api-football-standings.azharimm.site/leagues/${selectLeagues}/standings?season=${selectYear}`;

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setIsLoading(false);
    setStandings(json);
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, [selectLeagues, selectYear]);

  return (
    <div className="main">
      <div className="select-fields">
        <div className="league-dropdown">
          <select className="league-names">
            <option value={"arg.1"}>
              Argentine Liga Profesional de Fútbol
            </option>
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
        </div>
        <div className="year">
          <select>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Main;
