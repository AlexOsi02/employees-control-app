import './employees-list-item.css'
import {Component} from "react";

class EmployeesListItem extends Component {
    onValueChange = (e) => {
        this.props.onChangeSalary(this.props.id, e.currentTarget.value)
    }

    render() {
        const {name, salary, onDelete, increase, rise, onToggleProp} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' rise';
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + " $"}
                    onChange={this.onValueChange}/>
                <div>
                    <button type="button" className="btn-cookie" onClick={onToggleProp} data-toggle="increase"><i
                        className="fas fa-cookie"/></button>
                    <button type="button" className="btn-trash" onClick={onDelete}><i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;