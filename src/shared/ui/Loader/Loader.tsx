import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'
import { type ReactElement } from 'react'

export interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps): ReactElement => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
)
