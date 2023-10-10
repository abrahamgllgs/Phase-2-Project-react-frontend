const header = () => {
  return (
    <>
      <header>
        <h1 a href="Cocktail App" className="AppName">
          Cocktail App
        </h1>
        <nav>
          <ul>
            <li>
              <a href="Random Cocktail" className="site-title">
                Random Cocktail
              </a>
            </li>
            <li>
              <a href="List of Margaritas" className="site-list">
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
