import { useEffect, useState } from 'react';
import Card from '../../../Card';

export default function Daily({ daily, theme }) {
  return (
    <>
      <div className="daily">
        {daily.map((weather, index) => {
          if (index < 5) {
            return <Card key={index} data={weather} theme={theme} />;
          }
        })}
      </div>
      <style jsx>{`
        .daily {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
