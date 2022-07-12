import React, { Component } from 'react';

class App extends Component {

    state = {

                nome: 'Ryan',
                idade: 16,
                comidaFavorita: 'carne de panela com batata',
                music: ["Pais e filhos", "Mandona","paradise" ]
            }
   
    render() {
        return(
            <div>
                <h1>Meu nome é: {this.state.nome}</h1>

                <h2>Minha idade é: {this.state.idade}</h2>

                <h3>Minha comida favorita é: {this.state.comidaFavorita}</h3>

                <ol>
                    <li> {this.state.music[0]}</li>
                    <li> {this.state.music[1]}</li>
                    <li> {this.state.music[2]}</li>
                </ol>
            </div>
        )
        }
    }
export default App;