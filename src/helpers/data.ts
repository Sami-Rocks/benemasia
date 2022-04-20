type HeaderDataType = {
    id:number;
    title: string
}

type SidebarDataType ={
    icon:string
} & HeaderDataType

type ChecklistDataType = {
    id:number;
    name:string;
    checked?:boolean
}
type ConfigurationDataType = {
    id:number,
    title:string,
    description: string,
    hasCheckList?:boolean
}

export const headerData:HeaderDataType[] = [
    {
        id: 1,
        title: "Dashboard"
    },
    {
        id:2,
        title: 'Settings'
    },
    {
        id: 3,
        title: "Grant Access"
    },
    {
        id:4,
        title: 'Community'
    },
    {
        id: 5,
        title: "Message Credits"
    },
    {
        id:6,
        title: 'Gates'
    },

]
export const communityHeaderData:HeaderDataType[] = [
    {
        id: 1,
        title: "Feed"
    },
    {
        id:2,
        title: 'Chat'
    },
    {
        id: 3,
        title: "Issues"
    },
    {
        id:4,
        title: 'Members'
    },
    {
        id: 5,
        title: "Community Access History"
    },
    {
        id:6,
        title: 'Staff Directory'
    },
    {
        id:7,
        title: 'Manage Access Requests'
    },
    {
        id:6,
        title: 'Collect Payments'
    },

]

export const sidebarData:SidebarDataType[] = [
    {
        id: 1,
        title: "Onboarding",
        icon: ""
    },
    {
        id: 2,
        title: "Access Rules",
        icon: ""
    },
    {
        id: 3,
        title: "Community Account",
        icon: ""
    },
    {
        id: 4,
        title: "Admin Account",
        icon: ""
    },
    {
        id: 5,
        title: "Notifications",
        icon: ""
    },
]

export const checklistData:ChecklistDataType[] = [
    {
        id: 1,
        name: 'Tenant',
        checked: true
    },
    {
        id: 2,
        name: 'Developer'
    },
    {
        id: 3,
        name: 'Facility Manager'
    },
    {
        id: 4,
        name: 'Property Owner'
    },
    {
        id: 5,
        name: 'Landloard'
    },
]


export const configurationData:ConfigurationDataType[] = [
    {
        id:1,
        title:'Capture Visitor Entry and Exit',
        description:'Confirm entry/exit before granting access',
        hasCheckList: false             
    },
    {
        id:2,
        title:'Identity Verification',
        description:'Confirm visitor ID before granting access'            
    },
    {
        id:3,
        title:'Enable Secondary Gate Access',
        description:'This will be sent to all platform users on onboarding, prompting them to specify if they have a secondary gate.'          
    },
    {
        id:4,
        title:'Allow users to generate one-time access codes',
        description:'By turning on this toggle, you agree to confirm entry/exit before granting access',
        hasCheckList:true           
    },
    {
        id:5,
        title:'Allow users to generate event access codes',
        description:'By turning on this toggle, you give users access to generate access codes for events',
        hasCheckList:true    
    },
    {
        id:6,
        title:'Allow users to generate recurring access codes',
        description:'By turning on this toggle, you give users access to generate access codes for recurring events',
        hasCheckList:true       
    },
    {
        id:7,
        title:'Allow users to generate multiple access codes',
        description:'By turning on this toggle, you give users access to generate mutiple access codes',
        hasCheckList:true           
    },
    {
        id:8,
        title:'Allow users to request multiple access codes',
        description:'By turning on this toggle, you give users access to generate mutiple access codes',
        hasCheckList:true            
    },
]

export const TableContent = [
    {
        id:1,
        additionalInfomation: 'Visitor Company',
        requried:'Requried',
        show: 'show',
        select: true
    },
    {
        id:2,
        additionalInfomation: 'Visitor Type',
        requried:'Requried',
        show: 'show',
        select: true
    },
    {
        id:3,
        additionalInfomation: 'Visitor Department',
        requried:'Requried',
        show: 'show',
        select: true
    },
    {
        id:2,
        additionalInfomation: 'Reason for visiting',
        requried:'Not Requried',
        show: 'Do not Show',
        select: false
    },
]