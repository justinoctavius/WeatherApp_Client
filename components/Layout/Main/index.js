import Bar from '../../Bar';

const { default: Daily } = require('./Daily');
const { default: TodaysCard } = require('./Todays');

function Main({ data, theme }) {
  return (
    <>
      <main>
        <div>
          <Daily daily={data.daily} theme={theme} />
        </div>
        <div className="todaysWeather">
          <h2 className="todaysWeather_title">Clima de hoy</h2>
          <div className="todays">
            <TodaysCard
              theme={theme}
              title={'Velocidad del viento'}
              content={data.current.wind_speed + ' MPS'}
            />
            <TodaysCard
              theme={theme}
              title={'Humedad'}
              content={data.current.humidity + '%'}
              footer={<Bar percent={data.current.humidity} theme={theme} />}
            />
            <TodaysCard
              theme={theme}
              title={'Visibilidad'}
              content={data.current.visibility / 1000 + ' Km'}
            />
            <TodaysCard
              theme={theme}
              title={'Nubes'}
              content={data.current.clouds + '%'}
              footer={<Bar percent={data.current.clouds} theme={theme} />}
            />
          </div>
        </div>
      </main>
      <style jsx>{`
        main {
          background: ${theme.secondary};
          color: ${theme.primary};
          height: 100%;
          transition: 0.2s;
          position: relative;
        }
        .todaysWeather_title {
          color: ${theme.darkLight};
          font-size: 2.5rem;
        }
        .todaysWeather {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .todays {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

export default Main;
