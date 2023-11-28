import { Routes, Route } from 'react-router-dom'

// minhas páginas
import { Home } from '../pages/Home'
import { Destiny } from '../pages/Destiny'

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destino" element={<Destiny />} />
        </Routes>
)
}