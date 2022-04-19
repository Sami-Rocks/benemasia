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