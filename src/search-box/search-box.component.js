import { Component } from "react";
import './search-box.styles.css'

class SerachBox extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        // console.log('render from search box component')
        const {onSearchChangeHandler, placeholder} = this.props
        return(
            <div>
                <input className={`search-box ${this.props.className}`} type='search' placeholder={placeholder} onChange={onSearchChangeHandler}/>
            </div>
        )
    }
}

export default SerachBox;