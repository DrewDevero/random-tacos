import TacoTime from "./TacoTime";
import './App.css';

const mainDiv = {
  padding: "1rem",
  background: "linear-gradient(135deg, rgba(40, 50, 255, 0.5), rgba(104, 104, 104, 0.5), rgba(40, 50, 255, 0.5))",
}

const copyrightSpacing = {
  display: "flex",
  justifyContent: "center"
}

const copyright = {
  fontWeight: "bold",
  fontSize: "16px",
  margin: "8px"
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
        <h1 style={title} className="title">taco time!</h1>
      </div>
      <TacoTime />
      <footer style={copyrightSpacing}>
                <p style={copyright}>&copy; 2020 Alston Drew Devero-Belfon.</p>
        </footer>
    </div>
  );
}

export default App;