import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar/>
      <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">
            Ranomenjanahary J A 
            <a href="hei.jaonary@gmail.com"></a>
        </p>
        <button className="btn">Explore Now</button>
      </div>
    </div>
  );
}

export default App;
