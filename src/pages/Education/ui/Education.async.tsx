import { lazy } from 'react'

export const EducationAsync = lazy(async () => await import('./EducationPage'))
