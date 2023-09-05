import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type ReactElement } from 'react'

export interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): ReactElement => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>Page not found</h1>
        </div>
    )
}
