import { lazy } from 'react'

export const ExperienceAsync = lazy(async () => await import('./ExperiencePage'))
