import Configuration from 'components/Configuration'
import Sidebar from 'components/Sidebar'
import React from 'react'
import "./style.scss"

const Settings =()=>{
    return(
        <div className='settings' >
            <div className="container">
                <Sidebar />
                <section>
                    <h1>Access Rules</h1>
                    <Configuration
                        title='Capture Visitor Entry and Exit'
                        description='Confirm entry/exit before granting access'
                    />
                    <Configuration
                        title='Identity Verification'
                        description='Confirm visitor ID before granting access'
                    />
                    <Configuration
                        title='Enable Secondary Gate Access'
                        description='This will be sent to all platform users on onboarding, prompting them to specify
                        if they have a secondary gate.'
                    />
                    <Configuration
                        title='Allow users to generate one-time access codes'
                        description='By turning on this toggle, you agree to confirm entry/exit before granting access'
                        hasCheckList={true}
                        />
                    <Configuration
                        title='Allow users to generate event access codes'
                        description='By turning on this toggle, you give users access to generate access codes for events'
                        hasCheckList={true}
                        />
                    <Configuration
                        title='Allow users to generate recurring access codes'
                        description='By turning on this toggle, you give users access to generate access codes for recurring events'
                        hasCheckList={true}
                        />
                    <h4>MULTIPLE ACCESS</h4>
                    <Configuration
                        title='Allow users to generate multiple access codes'
                        description='By turning on this toggle, you give users access to generate mutiple access codes'
                        hasCheckList={true}
                        />
                    <Configuration
                        title='Allow users to request multiple access codes'
                        description='By turning on this toggle, you give users access to generate mutiple access codes'
                        hasCheckList={true}
                    />
                </section>
            </div>
        </div>
    )
}


export default Settings