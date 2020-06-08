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
        console.log('operação: '+operation)
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
            const i = this.state.current //qual digito no array será trabalhado
            const newValue = parseFloat(displayValue) //transformando o display
            const values = [...this.state.values] //copiando os valores
            values[i] = newValue //colocando o valor dentro do array
            this.setState({values}) //atualizando o array
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