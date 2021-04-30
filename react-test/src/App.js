import React , {useState , useEffect} from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
//prop salt okunur, state hem okunur hem yazılır
//state her değiştiğinde render çalışır.
function App() {
  const [isim,setIsim] = useState('Hey');
  const [data,setData] = useState([]);
  useEffect(() => {
    console.log('useEffect first()');
    axios.get('http://on-csoft.com/api/kpss/v1/akis')
    .then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    })
  },[]);
  useEffect(() => {
    console.log('useEffect merhaba');
  },[isim]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {isim}
        </a>
        <Hosgeldin isim="Osman">
          <p>Children Geldi</p>
        </Hosgeldin>
        <button onClick={() => setIsim("Osman")}>İsim Değiş</button>
        { isim === 'Hey' && <MesajGoster/> }
        {
          data.map((item,index) => {
            return <p>{item.Adi}</p>
          })

        }
      </header>
    </div>
  );
}

function Hosgeldin(props){
  return (
    <div>
      Hosgeldin {props.isim}
      {props.children}
    </div>
  );
}

function MesajGoster(){
  const [durum,setDurum] = useState(true);
   useEffect(() => {
    console.log('Mesaj Göster useEffect merhaba');
    return () => {
      console.log("Mesaj Göster unmout!!!!");
    }
  },[]);
  return(
    <div>
    { durum ? 
      (
          <h3>Mesaj1</h3>
      ):
      (
         <h3>Mesaj2</h3>
      )
    }
    <button onClick={() => setDurum(!durum)}>Mesaj Değiş</button>
    </div>
  );
}

export default App;
