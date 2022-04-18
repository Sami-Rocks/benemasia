import './style.scss'
import { headerData } from 'helpers/data'

const Header =()=>{
    return(
        <header>
            <div className="container">
                <div className='logo-nav' >
                    <div className="logo">
                        <h2>Jasper</h2>
                    </div>
                    <nav>
                        <ul>
                            {headerData.map(data =>(
                                <li key={data.id} className={`${data.id === 2 && 'active'}`} >
                                    {data.title} 
                                    { data.id === 2 && <span className='dot' ></span> } 
                                </li> 
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='message-credits' >
                        <p>88 Message Credits</p>
                    </div>
                    <div className="user">
                        <div className="avatar">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header