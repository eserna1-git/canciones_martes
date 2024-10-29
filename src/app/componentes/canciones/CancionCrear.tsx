export const CancionCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="titu" className="form-label">Título Canción</label>
              <input
                type="text"
                className="form-control border-info"
                id="titu"
                name="titu"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="cant" className="form-label">Cantante</label>
              <input
                type="text"
                className="form-control border-info"
                id="cant"
                name="cant"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="dura" className="form-label">Duración</label>
              <input
                type="text"
                className="form-control border-info"
                id="dura"
                name="dura"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="gene" className="form-label">Género</label>
              <select className="form-select border-info" id="gene" name="gene" required>
                <option selected disabled value="">
                  Seleccione el género
                </option>
                <option>Salsa</option>
                <option>Vallenato</option>
                <option>Champeta</option>
                <option>Reggaeton</option>
                <option>Pop</option>
              </select>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Canción
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
