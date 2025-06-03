import { Segment } from './components/segment'
import w from './utils/data.json'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-gray-200 text-gray-900 my-10">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-gray-900">{w.name}</h1>
      <p className="text-center text-gray-700 mb-6">{w.description}</p>
      <div className="flex justify-center space-x-6 font-semibold text-gray-700 mb-10">
        <span><span className="font-bold">Discipline:</span> {w.discipline}</span>
        <span><span className="font-bold">Total Duration:</span> {w.duration.value} {w.duration.unit}</span>
      </div>
      {w.segments.map(segment => (
        <Segment key={segment.title} segment={segment} />
      ))}
    </div>
  )
}

export default App