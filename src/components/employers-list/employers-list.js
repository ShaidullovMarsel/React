import EmployersListItem from '../employers-list-item/employers-list-item'
import './employrs-list.css'

const EmployersList = () => {
    return (
        <ul className="app-list app-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}

export default EmployersList;