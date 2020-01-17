import React, {useState} from 'react';
import './global.css';
import './App.css';
import './SideBar.css';
function App() {
  return (
    <div id="app">
      <aside>
        <stong>Cadastrar</stong>
        <form>
          <div className="input-block">
              <label htmlFor="github_username">Ususário GitHub</label>
              <input name="github_username"id="github_username"required/>
          </div>
          <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs"id="techs"required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input name="Latitude"id="Latitude"required/>
            </div>

            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude"id="Longitude"required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

         
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;

//Componente: bloco isolado de html css ou js que nao interfere na aplicação
//Estado: Informações mantidas pelos componentes (imutabilidade)
//Propriedade: Informações que um componente pai passa para o componente filho
