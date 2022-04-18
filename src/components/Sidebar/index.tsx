import { sidebarData } from "helpers/data"
import "./style.scss"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav>
                <ul>
                    {
                        sidebarData.map(data => (
                            <li key={data.id} >{data.title}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar