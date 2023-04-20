import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        console.log('render from card-list-component.js')
        const {persons} = this.props
        console.log(persons)
        return(
            <div className="card-list">
                {
                    persons.map((data)=>{
                        const {name, email, id} = data //note the use : before return statement
                        return (
                            <Card name={name} email={email} id={id}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;