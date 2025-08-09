import Logo from './components/Logo'
import CardType from './components/CardType'
import { CARD_BRAND } from './constants/cardBrands'
import ATMScreen from './components/ATMScreen'

function App() {
  return (
    <div className="flex flex-col items-center justify-end h-screen bg-[#9475a2]">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="bg-[#efeee3] w-100 h-3/4 border-t-10 border-[#b6b6b6]">
        <div className="flex flex-col items-center justify-center">
          <CardType activeBrand={CARD_BRAND.VISA} />
          <ATMScreen />
        </div>
      </div>
    </div>
  )
}

export default App
