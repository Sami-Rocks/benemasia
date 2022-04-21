type HeaderDataType = {
    id:number;
    title: string;
    link?:string
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
        title: "Dashboard",
    },
    {
        id:2,
        title: 'Settings',
        link: '/'
    },
    {
        id: 3,
        title: "Grant Access"
    },
    {
        id:4,
        title: 'Community',
        link: '/community'
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
        icon: "people"
    },
    {
        id: 2,
        title: "Access Rules",
        icon: "lock"
    },
    {
        id: 3,
        title: "Community Account",
        icon: "community"
    },
    {
        id: 4,
        title: "Admin Account",
        icon: "account"
    },
    {
        id: 5,
        title: "Notifications",
        icon: "notif"
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

export const incomingRequests = [
    {
        id: 1,
        name: "Tobi Oshowobi",
    },
    {
        id: 2,
        name: "Emmanuel Gabriel",
    },
    {
        id: 3,
        name: "Franca Nnenna",
    },
    {
        id: 4,
        name: "Olufunke Faweya",
    },
    {
        id: 5,
        name: "Kianna Durant",
    },
    {
        id: 6,
        name: "Doris Brown",
    },
]

export const posts = [
    {
        id:1,
        user: 'Chidinma Ukaegbu',
        userType: 'admin',
        time: '5h',
        message: 'Hello everyone, we would like to announce that due to the ongoing fuel scarcity, we would have to cut down on electricity supply for now. This is unexpected and we apologise fr the inconvenience caused.',
        likes: 22,
        dislike: 50,
        comments: 50
    },
    {
        id:2,
        user: 'Chidinma Ukaegbu',
        userType: 'admin',
        time: '2d',
        message: "Hello everyone, it’s that time of the year again! #Valentine. We are going to have a valentine party this weekend! Date and venue will be communicated soon! ",
        likes: 100,
        dislike: 2,
        comments: 30
    },
    {
        id:3,
        user: 'Kiana Durant',
        userType: 'tenant',
        time: '2mins',
        message: "I would like to inform everyone that some cats got into the estate, they’re eating out of the garbage, littering everywhere and making a huge mess. Please let’s ensure that our garbage is propery placed in the main garbage at the back. I’d also appreciate if the cats are taken care of. Thanks.",
        likes: 20,
        dislike: 10,
        comments: 30
    },
]