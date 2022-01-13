import './employees-add-form.css'
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name < 2 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h4>Добавьте нового сотрудника</h4>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Как его зовут?"
                        name="name"
                        value = {name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="З/п в $?"
                        name="salary"
                        value = {salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;