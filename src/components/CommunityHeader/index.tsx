import { communityHeaderData } from "helpers/data"
import "./style.scss"


const CommunityHeader =()=>(
    <div className="community-header">
        <div className="container">
            <h3>Community</h3>
            <nav>
                <ul>
                    {
                        communityHeaderData.map(data => (
                            <li key={data.id} className={`${data.id === 1 && 'active'}`}  >{data.title}</li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    </div>
)

export default CommunityHeader