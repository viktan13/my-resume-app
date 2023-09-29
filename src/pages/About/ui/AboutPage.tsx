import { type ReactElement } from 'react'
import { Counter } from 'entities/Counter'

const AboutPage = (): ReactElement => {
    return (
        <div>
            <h1>About Page</h1>
            <Counter/>
        </div>
    )
}

export default AboutPage
