import React, {Component} from 'react'
import api from '../../services/api'

import "./styles.css"

export default class Main extends Component{

    //Variavel de estado é um objeto e armazena qualquer variável
    //O método render permanece escutando as alterações de variáveis de estado
    //e quando há alteração ele executa novamente.
    state = {
        products: [],
    }

    //Executa assim que o componente é exibido na tela
    componentDidMount(){
        this.loadProducts()
    }

    //As 'Arrow Functions mantém o valor do 'this' de fora da função
    loadProducts = async () => {
        const response = await api.get('/products')

        this.setState({products: response.data.docs})

        //Imprimindo array de produtos 
        console.log(response.data.docs)
    };
    render(){

        const {products} = this.state

        //return <h1>Total de produtos: {this.state.products.length}</h1>
        return(
            <div className="product-list">
                {products.map(product=>(
                    <article key={product._id}>
                        <strog>{product.title}</strog>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}

