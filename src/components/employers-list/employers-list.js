import EmployersListItem from '../employers-list-item/employers-list-item'
import './employrs-list.css'

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id}
             {...itemProps}
             onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmployersList;