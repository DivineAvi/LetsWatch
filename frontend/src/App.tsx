import Homepage from "./pages/Homepage/Homepage";
import {Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="h-screen bg-black">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Homepage />} />
        <Route path="/pricing" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
      </Routes>
    </div>
  )
}
