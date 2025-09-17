import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from "@/lib/theme-provider"

import ProjectsIndexPage from './routes/projects/ProjectsIndexPage'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<ProjectsIndexPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App