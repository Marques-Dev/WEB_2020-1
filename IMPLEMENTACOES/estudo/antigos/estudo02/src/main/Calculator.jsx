import React,{Component} from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current:0
}

export default class Calculator extends Component{

    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

        this.state = {...initialState}
    }

    clearMemory(){
        //console.log('limpar')
        this.setState({...initialState})
    }

    setOperation(operation){
        //console.log('operação: '+operation)
        if(this.state.current === 0)
            // se eu ainda estiver no índice 0 do meu array de valores
            // devo apagar meu display e setar o índice para 1,
            // além de armazenar a operação
            this.setState({operation,current:1,clearDisplay:true})
        else{
            let equals = false
            // se a opeção selecionada for o igual, seto a variável
            // equal pra true (eu finalizei o cálculo e devo mostrar algo)
            if(operation === '=')
                equals = true
            const currentOperation = this.state.operation
            
            // se forem uma das operações matemáticas abaixo, eu efetuo o 
            // cálculo e armazeno no índice 0 e depois zero o índice 1
            const values = [...this.state.values]
            if(currentOperation === '+'){
                values[0] = values[0]+values[1]
            }else if(currentOperation === '-'){
                values[0] = values[0]-values[1]
            }else if(currentOperation === '*'){
                values[0] = values[0]*values[1]
            }else if(currentOperation === '/'){
                values[0] = values[0]/values[1]
            }
            values[1]=0
            
            this.setState({
                displayValue:values[0], // mostre o valor do índice 0
                operation: equals ? null : operation, // se equal for verdadeiro, não tem operação
                current: equals ? 0 : 1, // algum cálculo foi feito e deve-se voltar ao 0
                clearDisplay: !equals, // não limpa o display se o equals for true
                values // copia novos valores
            })

        }
    }

    addDigit(n){
        //console.log('dígito: '+n)
        /* caso o display já tenha um número com ponto '.', essa regra
        impede que mais pontos sejam adicionados ao número */
        if(n==='.' && this.state.displayValue.includes('.'))
            return

        /* clearDisplay será true caso o display tenha APENAS 0 ou o valor do
          state.clearDisplay for true */
        let clearDisplay = false
        if(this.state.displayValue==='0' || this.state.clearDisplay)
            clearDisplay = true
        
        /* o currentValue  vai depender do clearDisplay */
        let currentValue = ''
        if(clearDisplay) currentValue = ''
        else currentValue = this.state.displayValue

        /* concatenando o currentValue com o que foi digitado */
        let displayValue = currentValue + n

        /* atualizando o display. clearDisplay é falso para poder sempre
        concatenar com um novo digito */
        this.setState({displayValue,clearDisplay:false})

        /* só é válido entrar aqui se for um digito */
        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue) //transformando o display
            //const values = [...this.state.values]
            const values = [this.state.values[0],this.state.values[1]]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }

    render(){
        return(
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label='AC' click={this.clearMemory} triple={true}/>
                <Button label='/' click={this.setOperation} operation/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.addDigit}/>
                <Button label='=' click={this.setOperation} operation/>
            </div>
        )
    }
}