import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
 
export class AddBtn extends Comment{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button>+ Add</button>
        )
    }
}


