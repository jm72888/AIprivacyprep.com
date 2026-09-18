import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SetupPage } from './pages/SetupPage'
import { QuizPage } from './pages/QuizPage'
import { ResultsPage } from './pages/ResultsPage'
import { HistoryPage } from './pages/HistoryPage'
import { DevelopmentsPage } from './pages/DevelopmentsPage'
import { PracticePage } from './pages/PracticePage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:certId/setup" element={<SetupPage />} />
      <Route path="/quiz/:certId/run" element={<QuizPage />} />
      <Route path="/quiz/:certId/results" element={<ResultsPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/developments" element={<DevelopmentsPage />} />
    </Routes>
  )
}
