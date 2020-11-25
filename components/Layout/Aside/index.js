function Aside({ data, theme }) {
  const weather = data.current.weather[0];

  return (
    <>
      <aside className="aside">
        <div>
          <div>
            <img
              className="icon"
              src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt="weather"
            />
            <div className="celsius">
              {data.current.temp}
              <span>&deg;C</span>
            </div>
          </div>
          <div>
            <h2 className="title">{weather.main}</h2>
            <p className="description">{weather.description}</p>
          </div>
        </div>
        <div className="timezone">{data.timezone}</div>
      </aside>

      <style jsx>{`
        aside {
          background: url('background.png');
          background-attachment: stretch;
          color: ${theme.light};
          display: flex;
          text-align: center;
          flex-direction: column;
          padding: 1rem;
          height: 150vh;
        }
        .title {
          margin-top: 2rem;
          font-size: 2rem;
        }
        .description {
          color: ${theme.darkLight};
          font-size: 1.1rem;
        }
        .celsius {
          font-size: 3rem;
        }
        .celsius span {
          font-size: 2rem;
        }
        .icon {
          width: 100%;
        }
        .timezone {
          margin: 2rem 0;
          font-size: 1rem;
          color: ${theme.darkLight};
        }
      `}</style>
    </>
  );
}

export default Aside;
