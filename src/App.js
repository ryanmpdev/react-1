import React, { Component } from 'react';
import "./App.css";

class App extends Component {

    state = {
        state: [
            {
                nome: 'Ryan',
                idade: 16,
                comidaFavorita: 'carne de panela com batata',
                music: ["Pais e filhos", "Mandona","paradise" ]
            }
        ]
    }
    render(){
        return(
            <section>
                <h1>Meu nome é: {this.state.nome}</h1>

                <h2>Minha idade é: {this.state.idade}</h2>

                <h3>Minha comida favorita é: {this.state.comidaFavorita}</h3>

                <ul>
                    <li>Música 1: {this.state.music[0]}</li>
                    <li>Música 2: {this.state.music[1]}</li>
                    <li>Música 3: {this.state.music[2]}</li>
                </ul>
            </section>
        )
    }
}

export default App;