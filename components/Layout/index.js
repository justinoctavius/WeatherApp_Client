import React, { useEffect, useState } from 'react';
import THEMES from '../../styles/themes';
import Button from '../Button';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';

function Layout({ data }) {
  const [theme, setTheme] = useState(THEMES.Dark);
  const [openAside, setOpenAside] = useState(false);

  useEffect(() => {}, [theme, openAside]);

  return (
    <>
      <div className="container">
        <div className="header">
          <Header
            data={data}
            setOpenAside={setOpenAside}
            openAside={openAside}
            changeTheme={setTheme}
            theme={theme}
          />
        </div>
        <div className={openAside ? 'aside' : 'aside open'}>
          <Aside data={data} theme={theme} />
        </div>
        <div className="main">
          <Main data={data} theme={theme} />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 30% 1fr;
          grid-template-rows: 5rem 1fr;
          height: 100vh;
        }

        .header {
          grid-row: 1/1;
          grid-column: 2/-1;
        }

        .aside {
          position: fixed;
          width: 30%;
          height: 100vh;
          z-index: 10;
          transition: 1s;
        }

        .main {
          grid-row: 2/-1;
          grid-column: 2/-1;
        }

        @media (max-width: 800px) {
          .header {
            grid-row: 1/1;
            grid-column: 1/-1;
          }
          .main {
            grid-row: 2/-1;
            grid-column: 1/-1;
          }
          .aside {
            width: 60%;
            left: -200vw;
          }

          .open {
            left: 0;
          }
        }

        @media (max-width: 450px) {
          .aside {
            width: 100%;
          }
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;
