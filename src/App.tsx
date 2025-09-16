import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import ProjectsIndexPage from './routes/projects/ProjectsIndexPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectsIndexPage />} />
      </Routes>
    </Router>
  )
}

export default App