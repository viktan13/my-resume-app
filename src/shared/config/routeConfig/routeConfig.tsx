import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ContactPage } from 'pages/Contact'
import { SkillsPage } from 'pages/Skills'
import { ExperiencePage } from 'pages/Experience'
import { EducationPage } from 'pages/Education'

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    SKILLS = 'skills',
    EXPERIENCE = 'experience',
    EDUCATION = 'education',
    CONTACT = 'contact',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SKILLS]: '/skills',
    [AppRoutes.EXPERIENCE]: '/experience',
    [AppRoutes.EDUCATION]: '/education',
    [AppRoutes.CONTACT]: '/contact',
    // you should keep it the last item
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.SKILLS]: {
        path: RoutePath.skills,
        element: <SkillsPage />
    },
    [AppRoutes.EXPERIENCE]: {
        path: RoutePath.experience,
        element: <ExperiencePage />
    },
    [AppRoutes.EDUCATION]: {
        path: RoutePath.education,
        element: <EducationPage />
    },
    [AppRoutes.CONTACT]: {
        path: RoutePath.contact,
        element: <ContactPage />
    },
    // the last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}
