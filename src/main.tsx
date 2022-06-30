import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { EpisodePage } from './pages/EpisodePage'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { LikedPage } from './pages/LikedPage'
import { PlayListPage } from './pages/PlayListPage'
import { SearchPage } from './pages/SearchPage'
// import Invoices from './routes/invoices'

// css
import './index.css'
// import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home1" element={<HomePage />} />
          <Route path="home2" element={<SearchPage />} />
          <Route path="home3" element={<LibraryPage />} />

          <Route path="home4" element={<PlayListPage />} />
          <Route path="home5" element={<LikedPage />} />
          <Route path="home6" element={<EpisodePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
