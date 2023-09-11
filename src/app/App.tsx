import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { type ReactElement } from 'react'
import useResponsive from 'shared/lib/hooks/useResponsive'

const App = (): ReactElement => {
    const { theme } = useTheme()
    const [isMobile] = useResponsive()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={'content-page'}>
                <Sidebar mobile={isMobile}/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App
