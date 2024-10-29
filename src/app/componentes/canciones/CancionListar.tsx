export const CancionListar = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>La noche</td>
                <td>Joe Arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Mi ex tenía razón</td>
                <td>Karol G</td>
                <td>3.5</td>
                <td>Reggaeton</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Diaz</td>
                <td>4.8</td>
                <td>Vallenato</td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>My inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal Soft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
