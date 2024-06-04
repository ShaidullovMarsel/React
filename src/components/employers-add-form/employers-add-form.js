import { Component } from 'react';

import './employers-add-form.css'

class EmployersAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            input: '',
            inputSalary: '',
            place: 'Как его зовут?',
            placeSalary: 'З/П в $?'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }     

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length < 3){
            this.setState({
                name: '',
                salary: '',
                input: "form-control new-post-label add-form-error",
                place: "Введите имя!"
            })
            return;
        }
        if(!this.state.salary){
            this.setState({
                name: '',
                salary: '',
                inputSalary: "form-control new-post-label add-form-error",
                placeSalary: 'Введите зарплату!'
            })
            return;
        }
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            input: "form-control new-post-label",
            inputSalary: "form-control new-post-label",
            place: 'Как его зовут?',
            placeSalary: 'З/П в $?'
        })
    }

    render() {
        const {name, salary, input, inputSalary, place, placeSalary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className={input}
                        placeholder={place}
                        name = "name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={inputSalary}
                        placeholder={placeSalary}
                        name = "salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;