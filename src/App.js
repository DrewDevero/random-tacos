import TacoTime from "./TacoTime";
import './App.css';

const mainDiv = {
  padding: "1rem",
  background: "linear-gradient(135deg, rgba(40, 50, 255, 0.5), rgba(104, 104, 104, 0.5), rgba(40, 50, 255, 0.5))",
}

const title = {
  textTransform: "capitalize",
  fontSize: "3rem"
}

const titleStyle = {
  textAlign: "center"
}

function App() {
  return (
    <div style={mainDiv}>
      <div style={titleStyle}>
        <h1 style={title} className="title">welcome to my site!</h1>
      </div>
      <TacoTime />
    </div>
  );
}

export default App;