import "./app-info.css"

const AppInfo = ({employees, increased}) => {
    return(
        <div className="app-info">
            <h2>Учет сотрудников в компании Daft Rock</h2>
            <h4>Общее число сотрудников: {employees}</h4>
            <h4>Премию получат: {increased}</h4>
        </div>
    )
}

export default AppInfo;