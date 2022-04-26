import Configuration from 'components/Configuration'
import Sidebar from 'components/Sidebar'
import React from 'react'
import "./style.scss"
import { configurationData, TableContent } from 'helpers/data'

const Settings =()=>{
    return(
        <div className='settings' >
            <div className="container">
                <Sidebar />
                <section>
                    <h1>Access Rules</h1>
                    {
                        configurationData.map(data=>(
                            <div key={data.id}>
                                <Configuration
                                    title={data.title}
                                    description={data.description}
                                    hasCheckList={data.hasCheckList}
                                />
                                {data.id ===6 &&  <h4>MULTIPLE ACCESS</h4> }
                            </div>
                        ))
                    }
                   
                    <table>
                        <thead>
                            <tr>
                                <th className='left' >Addition Information</th>
                                <th>Make Required</th>
                                <th>Show in estate/visitor access history</th>
                                <th className='left' >Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                TableContent.map(data => (
                                    <tr>
                                        <td className='left'>{data.additionalInfomation}</td>
                                        <td  >
                                            <div className='with-icon'>
                                                {data.requried}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>

                                            </div>
                                        </td>
                                        <td >
                                            <div className='with-icon'>
                                                {data.show}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>    
                                            </div>
                                        </td>
                                        <td>
                                            <label className="checkbox">
                                                <input type="checkbox" checked={data.select} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    ) 
}

export default Settings