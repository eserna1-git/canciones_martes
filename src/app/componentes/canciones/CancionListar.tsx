import { useState } from "react";
import { Cancion } from "../../modelos/Cancion";
import { ARREGLO_CANCIONES } from "../../mocks/Cancion-mocks";
import { ARREGLO_CANCION_GENERO } from "../../utilidades/dominios/DonGenero";

export const CancionListar = () => {
  const [arrCancion] = useState<Cancion[]>(ARREGLO_CANCIONES);
  const nombreGenero = (valor: string) => {
    for (const objGenero of ARREGLO_CANCION_GENERO) {
      if (objGenero.codGenero == valor) {
        return objGenero.nombreGenero;
      }
    }
  };

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
                <th scope="col">Género</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrCancion.map((miCan: Cancion) => (
                <tr key={miCan.codCancion}>
                  <td scope="row">{miCan.codCancion}</td>
                  <td>{miCan.TituloCancion}</td>
                  <td>{miCan.cantanteCancion}</td>
                  <td>{nombreGenero(miCan.codgeneroCancion)}</td>
                  <td>
                    <img src={miCan.imagenCancionBase64} alt="" className="imagenListado" />
                    {miCan.imagenCancion} <br />
                    {miCan.imagenCancionBase64}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
