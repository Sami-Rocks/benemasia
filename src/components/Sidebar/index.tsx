import { sidebarData } from "helpers/data"
import "./style.scss"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav>
                <ul>
                    {
                        sidebarData.map(data => (
                            <li key={data.id} className={`${data.id === 2 && 'active'}`} >{data.title}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar