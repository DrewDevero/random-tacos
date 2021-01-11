import axios from "axios";
import { Component } from "react";

const layerStyle = {
    margin: "1rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    textDecoration: "underline"
}
const infoKey = {
    margin: "1rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
    textTransform: "capitalize"
}
const infoVal = {
    margin: "1rem",
    fontStyle: "italic",
}
const basicSpacing = {
    margin: "1rem"
}
const TacoButtonSpacing = {
    margin: "2.5rem 1rem 1rem 1rem",
    display: "flex",
    justifyContent: "center"
}
const getTacoButton = {
    fontWeight: "bold",
    color: "black",
    outline: "none",
    borderRadius: "20%",
    padding: "1rem",
    fontSize: "1.25rem",
    background: "rgba(180, 180, 180, 0.85)"
}

export default class TacoTime extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleUpdateCondimentRecipe = this.handleUpdateCondimentRecipe.bind(this)
    }

    async getAll() {
        try {
            const res = await axios.get("http://taco-randomizer.herokuapp.com/random/")
            console.log(res.data);
            this.setState({apiTaco: res.data})
        } catch(err) {
            console.error(err)
        } finally {
            console.log("random taco get attempt made")
        }
    }

    componentDidMount() {
        this.getAll();
    }

    handleUpdateCondimentRecipe = () => {
        this.getAll();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        return(
            <div style={basicSpacing}>
            <div style={TacoButtonSpacing}>
                    <button type="button" style={getTacoButton} onClick={ () => this.handleUpdateCondimentRecipe() }>Get New Taco</button>
                </div>
            {this.state.apiTaco && Object.keys(this.state.apiTaco).map((layer, index) => 
                <div key={index}>
                    <div style={layerStyle}>
                        {layer}
                    </div>
                    {Object.entries(this.state.apiTaco[layer]).map((information, index) => 
                    <div key={index}><span style={infoKey}>{information[0]}</span>: <span style={infoVal}>{information[1]}</span>
                    </div>
                    )}
                </div>
            )}
                <div style={TacoButtonSpacing}>
                    <button type="button" style={getTacoButton} onClick={ () => this.handleUpdateCondimentRecipe() }>Get New Taco</button>
                </div>
            </div>
        )
    }
}
