import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css'
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

// Componente --> Função que retorna um comteúdo HTML, ou CSS, ou JS(interface). Bloco isolado que ñ interfere n resto da aplicação 
  // Como o componente "App" abaixo (1ª letra sempre maiuscula)
  // É possível criar mais de um componente. Porém ideal que seja um componente por arquivo 

// Propriedade --> Informações que um componente PAI passa a componentes filho
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade) - nunca alterar um dado, sempre cria um novo com base no antigo


function App() {
  const [devs, setDevs] = useState([]);




  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev (data){
  
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
   }
  
  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
        </aside>
        <main>
          <ul>
            {devs.map( dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}     
          </ul>
        </main>
      </div>
  );
}

export default App;
