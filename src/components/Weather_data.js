import React,{Component} from'react';
import $ from "jquery"
import '../App.css';




class Weather extends Component{
    constructor(props){
        super(props)

        this.state = {
            city_name:"",
            humidity:"",
            img_src:"",
            description:"",
        }

        this.handleData = this.handleData.bind(this)
    }


    // Handle input data

    handleData (evt){
        if(evt.keyCode === 13){
         const input_value = evt.target.value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_value}&APPID=7cf11f9b730eaf6b7dcc31f8ec5a2b26`)
        .then(function(response){
          return response.json();
        }).then(function(data){
            
            this.setState({
                city_name:data.name,
                humidity:data.main.humidity,
                img_src: data.weather[0].icon,
                description:data.weather[0].description

            })
            console.log(data)

        }.bind(this))
        .catch(function(error){
            console.log(error)
        })
        }
    }

    render(){ 
        return(

            <div>
                <div className = "container">
                <input type="text" onKeyUp ={this.handleData} placeholder ="Search City"></input>
                <h1 className = "title">{this.state.city_name}</h1>
                <h3 className="degree_symbol">{this.state.humidity}</h3>
                {
                    this.state.img_src!=="" ?<div className="img_display"> <span>°C</span> 
                    <img src = {`http://openweathermap.org/img/w/${this.state.img_src}.png`}></img></div> 
                    :  ""
                }
                <h4>{this.state.description}</h4>
                <hr/>

                </div>

            </div>
        )
    }
}

export default Weather;