export type NavItem = {
    title: string
    url: string
}

export type Project = {
    id: number
    description: string
    link: string
    name: string
    position: number
    visible: boolean
}

export type Experience = {
    id: number
    company: string
    position: string
    startYear: number
    endYear: number
    description: string
}