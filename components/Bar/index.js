import THEMES from '../../styles/themes';

export default function Bar({ percent, theme }) {
  return (
    <>
      <div className="bar-box">
        <p>0</p>
        <p>50</p>
        <p>100</p>
        <div className="bar"></div>
      </div>
      <style jsx>{`
        .bar-box {
          background: ${theme.darkLight};
          height: 1rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;
          color: ${theme.primary};
          font-size: 1rem;
        }
        .bar {
          background: ${theme.warning};
          height: 1rem;
          animation-name: bar;
          animation-duration: 0.7s;
          animation-delay: 0.3s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
          position: absolute;
        }

        @keyframes bar {
          from {
            width: 0;
          }
          to {
            width: ${percent}%;
          }
        }
      `}</style>
    </>
  );
}
