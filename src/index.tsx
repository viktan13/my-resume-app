import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

const container: HTMLElement = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
)
