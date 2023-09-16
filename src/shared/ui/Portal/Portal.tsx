import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = (props: PortalProps): ReturnType<typeof createPortal> => {
    const {
        children,
        element = document.body
    } = props

    return createPortal(children, element)
}
