import { Outlet } from 'react-router-dom'
import CardType from './components/CardType'
import Logo from './components/Logo'
import { usePin } from './hooks/usePin'

function App() {
  const { cardBrand } = usePin()
  return (
    <div className="flex flex-col items-center justify-end h-screen bg-[#9475a2]">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="bg-[#efeee3] w-100 h-3/4 border-t-10 border-[#b6b6b6]">
        <div className="flex flex-col items-center justify-center">
          <CardType activeBrand={cardBrand} />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
