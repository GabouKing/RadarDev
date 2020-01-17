import React, {useState, useEffect} from 'react';
import api from'./services/api';
import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';


function App() {
  const [devs, setDevs] = useState([]);
  const[github_username, setGithubUsername]=useState('');
  const[techs, setTechs]=useState('');
  const[latitude, setLatitude]=useState('');
  const[longitude, setLongitude]=useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        //console.log(position);
    },
    (err)=>{
      console.log(err);
    },
    {
      timeout: 30000,
    }
    )
  } ,[]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },
  
    []);
  
  async function  handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    })
    setGithubUsername('');
    setTechs('');
    setDevs([...devs,response.data]);
    //console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
              <label htmlFor="github_username">Ususário GitHub</label>
              <input
               name="github_username"
               id="github_username"
               required
               value={github_username}
               onChange={e=>setGithubUsername(e.target.value)}
               />
          </div>
          <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input
               name="techs"
               id="techs"
               required
               value={techs}
               onChange={e=>setTechs(e.target.value)}
               />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input 
              type="number"
              name="Latitude"
              id="Latitude"
              required value={latitude}
              onChange={e=>setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input 
              type="number"
              name="Longitude"
              id="Longitude"
              required value={longitude}
              onChange={e=>setLongitude (e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

         
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev=>(
            <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
          <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acesse o perfil no GitHub</a>
          </li>
          ))}
                    
        </ul>
      </main>
    </div>
  );
}

export default App;

//Componente: bloco isolado de html css ou js que nao interfere na aplicação
//Estado: Informações mantidas pelos componentes (imutabilidade)
//Propriedade: Informações que um componente pai passa para o componente filho
