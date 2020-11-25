export default function TodaysCard({ title, content, footer, theme }) {
  return (
    <>
      <div className="card">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="footer">{footer}</div>
      </div>
      <style jsx>{`
        .card {
          color: ${theme.primary};
          background: ${theme.three};
          border: 0.1rem solid ${theme.darkLight};
          margin: 1rem;
          padding: 2rem;
          text-align: center;
          min-width: 20rem;
          max-width: 20rem;
        }
        .title {
          font-size: 1rem;
        }
        .content {
          font-size: 3rem;
        }
      `}</style>
    </>
  );
}
