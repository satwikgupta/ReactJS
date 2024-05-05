import { useEffect, useRef, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const bgImg = 'https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


function App() {
    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)
    console.log("option:", options)

    const swap = () =>{
        setFrom(to)
        setTo(from)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    // const formRef = useRef()
    // useEffect(() => {
    //     formRef.current.submit()
    // }, [amount, from, to])

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat m-0 p-0"
          style={{
              backgroundImage: `url(${bgImg})`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                    //   ref={formRef}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOption={options}
                              onAmountChange={(amount) => setAmount(amount)}
                              onCurrencyChange={(currency) => setAmount(currency)}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOption={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
  export default App;