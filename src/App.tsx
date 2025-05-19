import React, { useState } from 'react';
import './components/gender-selector';
import { GenderSelector } from './components/gender-selector';

function App() {

  const [age, setAge] = useState<number>(26);
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);

  function handleAgeChange(newAge: number) {
    setAge(newAge);
  }

  function handleHeightChange(newHeight: number) {
    setHeight(newHeight);
  }
  function handleWeightChange(newWeight: number) {
    setWeight(newWeight);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="shadow-md rounded-lg p-6 max-w-3xl w-full" style={{ backgroundColor: "#f9f5f2" }}>
        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">BMI Calculator</h1>
            <h6 className="text-gray-600 mb-10">Enter the values and click the calculate button to get results.</h6>
            <h6 className="font-bold mb-1">Gender</h6>
            <GenderSelector />
            <h6 className='font-bold mb-1'>Age</h6>
            <input
              type="number"
              placeholder="Enter your age"
              min={0}
              value={age}
              onChange={e => {
                const input = e.target as HTMLInputElement;
                if (input.value && Number(input.value) < 0) input.value = "";
                handleAgeChange(Number(input.value));
              }
              }
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <h6 className='font-bold mb-1'>Height</h6>
            <div className='flex space-x-4 mb-1'>
              <input
                type="number"
                placeholder="Enter your height in cm"
                value={height}
                onChange={e => {
                  const input = e.target as HTMLInputElement;
                  if (input.value && Number(input.value) < 0) input.value = "";
                  handleHeightChange(Number(input.value));
                }
                }
                min={0}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3"
              />
            </div>
            <h6 className='font-bold mb-1'>Weight</h6>
            <div className='flex space-x-4 mb-5'>
              <input
                type="number"
                placeholder="Enter your height in cm"
                value={weight}
                onChange={e => {
                  const input = e.target as HTMLInputElement;
                  if (input.value && Number(input.value) < 0) input.value = "";
                  handleWeightChange(Number(input.value));
                }
                }
                min={0}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3"
              />
            </div>
            <button
              className='w-full bg-red-400 text-white rounded-lg py-2 hover:cursor-pointer'
            >
              Calculate
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex-1">
            <h3 className="font-bold">Your Results</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
