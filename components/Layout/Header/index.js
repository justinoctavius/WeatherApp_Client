import THEMES from '../../../styles/themes';
import Button from '../../Button';

function Header({ theme, changeTheme, setOpenAside, openAside }) {
  const changeThemeHandler = () => {
    theme.darkMode ? changeTheme(THEMES.Light) : changeTheme(THEMES.Dark);
  };
  return (
    <>
      <header>
        <div className="buttons">
          <div className="btn-aside">
            <Button theme={theme} event={() => setOpenAside(!openAside)}>
              {openAside ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </Button>
          </div>
          <div className="btn-theme">
            <Button theme={theme} event={changeThemeHandler}>
              {theme.darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </Button>
          </div>
        </div>
      </header>
      <style jsx>{`
        header {
          background-color: ${theme.secondary};
          color: ${theme.light};
          display: flex;
          align-items: center;
          padding: 2rem;
          justify-content: flex-end;
          height: 100%;
          transition: 0.2s;
        }
        .buttons {
          font-size: 1.1rem;
          display: flex;
        }
        .buttons > div {
          margin: 0 0.2rem;
        }
        .btn-aside {
          display: none;
        }
        @media (max-width: 800px) {
          .buttons {
            display: flex;
            position: fixed;
            z-index: 20;
          }
          .btn-aside {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
