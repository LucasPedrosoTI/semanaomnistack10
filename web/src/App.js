import React, { useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

// Componente --> Função que retorna um comteúdo HTML, ou CSS, ou JS(interface). Bloco isolado que ñ interfere n resto da aplicação 
  // Como o componente "App" abaixo (1ª letra sempre maiuscula)
  // É possível criar mais de um componente. Porém ideal que seja um componente por arquivo 

// Propriedade --> Informações que um componente PAI passa a componentes filho
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade) - nunca alterar um dado, sempre cria um novo com base no antigo


function App() {
  
  

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
              <div class="input-block">
                <label htmlFor="github_username">Usuário do Github</label> 
                <input name="github_username" id="github_username" required />
              </div>

              <div class="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required />
              </div>

              <div className="input-group">
                <div class="input-block">
                  <label htmlFor="latitude">Latitude </label>
                  <input name="latitude" id="latitude" required />
                </div>

                <div class="input-block">
                  <label htmlFor="longitude">Longitude </label>
                  <input name="longitude" id="longitude" required />
                </div>
              </div>
              
              <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>

        </main>
      </div>
  );
}

export default App;
