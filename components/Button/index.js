export default function Button({ children, event, theme }) {
  return (
    <>
      <button onClick={event}>{children}</button>
      <style jsx>{`
        button {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: ${theme.three};
          color: ${theme.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          color: ${theme.secondary};
        }
      `}</style>
    </>
  );
}
