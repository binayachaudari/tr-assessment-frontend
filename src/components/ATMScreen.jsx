import React from 'react';

export default function ATMScreen({ title = 'Welcome to the ATM' }) {
  return (
    <div className="bg-[#72acce] flex flex-col justify-between p-4 border-4 border-gray-300 text-white font-mono w-60 h-50">
      <div className="text-center font-bold text-lg">{title}</div>
    </div>
  );
}
