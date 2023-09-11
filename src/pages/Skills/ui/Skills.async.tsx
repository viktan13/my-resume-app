import { lazy } from 'react'

export const SkillsAsync = lazy(async () => await import('./SkillsPage'))
