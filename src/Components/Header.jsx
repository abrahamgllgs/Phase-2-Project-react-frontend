const header = () => {
  return (
    <>
      <header>
        <h1 className="AppName">Cocktail App</h1>
        <nav>
          <ul>
            <li>
              <a href="some-id1" className="site-title">
                Random Cocktail
              </a>
            </li>
            <li>
              <a href="some-id2" className="site-list">
                List of margaritas
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default header;
