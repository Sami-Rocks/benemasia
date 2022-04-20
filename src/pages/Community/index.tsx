import CommunityHeader from "components/CommunityHeader"
import "./style.scss"

const Community = () => {
    return(
        <div className="community">
            <CommunityHeader />
            <div className="main">
                <div className="post-area">
                    <div className="post-input">
                        <input type="text" placeholder="What would you like to say today?" />
                        <div className="post-types">
                            <div className="types">
                                <p>Photos</p>
                            </div>
                            <div className="types">
                                <p>Video</p>
                            </div>
                            <div className="types">
                                <p>Documents</p>
                            </div>
                            <div className="types">
                                <p>Polls</p>
                            </div>
                        </div>
                    </div>

                    <div className="posts">
                        <div className="post">
                            <div className="icon"></div>
                            <div className="content">
                                <h4>Name <span>@admin   5h</span> </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, ex exercitationem vel quidem quos. Eum doloribus, architecto ratione sit cupiditate voluptates quisquam deleniti ipsa accusamus, deserunt, earum corporis soluta.</p>
                                <div className="reactions">
                                    <div className="react">
                                        <p>100</p>
                                    </div>
                                    <div className="react">
                                        <p>100</p>
                                    </div>
                                    <div className="react">
                                        <p>20</p>
                                    </div>
                                </div>
                                <div className="more">.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="incoming">
                    <h3>Incoming Post Requests</h3>
                    <div className="requests">
                        <div className="request">
                            <div className="texts">
                                <div className="icon"></div>
                                <div>
                                    <h4>Tobi</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas inventore atque voluptates odio aut incidunt. Est libero voluptatum provident pariatur, dignissimos neque modi, maiores distinctio fugit eaque in ipsa sapiente.</p>
                                </div>
                            </div>
                            <button>Open</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community