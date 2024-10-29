export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">
                  Compositores
                </a>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Canciones
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                    <a className="dropdown-item" href="/cancre">
                      Registrar canciones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/canlis">
                      Listar canciones
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/canadmin">
                      Administrar canciones
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/acerca">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
