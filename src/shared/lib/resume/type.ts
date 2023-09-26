export interface Resume {
    firstName: string
    lastName: string
    position: string
    email: string
    address: string
    linkedIn: string
    summary: string
    skillsPage: SkillsPage
    experience: Experience
    education: Education[]
}

interface SkillsPage {
    intro: string
    skills: Skills[]
}

interface Skills {
    id: string
    skill: string
    range: number
    color: string
    icon: string
    moduleSpecifier: string
}

interface Experience {
    companies: Company[]
}

interface Company {
    name: string
    location: string
    position: string
    start: WorkDate
    end?: WorkDate | undefined
    stillWorking: boolean
    achievements: string[]
}

interface WorkDate {
    month: string
    year: string
}

interface Education {
    university: string
    degree: string
    country: string
}
