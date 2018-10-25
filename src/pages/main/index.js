import React, {Component} from 'react'
import api from '../../services/api'

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
        //return <h1>Total de produtos: {this.state.products.length}</h1>
        return(
            <div className="products-list">
                {this.state.products.map(product=>(
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }
}

