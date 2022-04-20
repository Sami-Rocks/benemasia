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
                                        <td>{data.requried}</td>
                                        <td>{data.show}</td>
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