const weekdays = {
  0: 'Dom',
  1: 'Lun',
  2: 'Mar',
  3: 'Mie',
  4: 'Jue',
  5: 'Vie',
  6: 'Sab'
};

const getDate = dt => {
  const date = new Date(dt * 1000);
  return `${weekdays[date.getDay()]}/${date.getDate()}/${date.getFullYear()}`;
};

export default function Card({ data, theme }) {
  const { temp, weather, dt } = data;

  return (
    <>
      <div className="card">
        <div className="card_header">
          <p className="card_header_date">
            {getDate(dt)}
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt={weather.main}
            />
          </p>
        </div>
        <p>
          {temp.day}
          <span>&deg;C</span>
        </p>
        <span className="card_desc">{weather[0].description}</span>
      </div>

      <style jsx>{`
        .card {
          background: ${theme.three};
          width: 10rem;
          display: flex;
          flex-direction: column;
          margin: 1rem;
          padding: 1rem;
          border: 0.1rem solid ${theme.darkLight};
          text-align: center;
          font-size: 1rem;
        }

        .card_body,
        .card_desc,
        .card_header_date {
          margin: 0;
        }

        .card > div {
          display: flex;
          justify-content: space-between;
        }

        .card_body span {
          font-size: 0.8rem;
        }

        .card_desc {
          text-align: center;
          color: ${theme.darkLight};
        }

        @media (max-width: 450px) {
          .card {
            width: min-content;
          }
        }
      `}</style>
    </>
  );
}
