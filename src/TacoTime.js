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
    }

    render() {
        return(
            <div style={basicSpacing}>
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
                <div style={basicSpacing}>
                    <button type="button" onClick={ () => this.handleUpdateCondimentRecipe() }>Get New Taco</button>
                    </div>
            </div>
        )
    }
}
