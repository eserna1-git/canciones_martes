export const CancionAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No. </th>
                <th scope="col">Título canción</th>
                <th scope="col">Cantante</th>
                <th scope="col">Duración</th>
                <th scope="col">Género</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>La noche</td>
                <td>Joe Arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
                <td>
                <a href="/canact/1">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#000080"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#000080"}}></i>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Mi ex tenía razón</td>
                <td>Karol G</td>
                <td>3.5</td>
                <td>Reggaeton</td>
                <td>
                <a href="/canact/2">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#000080"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#000080"}}></i>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Diaz</td>
                <td>4.8</td>
                <td>Vallenato</td>
                <td>
                  <a href="/canact/3">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#000080"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#000080"}}></i>
                </td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>My inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal Soft</td>
                <td>
                <a href="/canact/4">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#000080"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#000080"}}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
