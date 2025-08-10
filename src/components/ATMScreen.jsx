import stickerGraf from '../assets/sticker_graf.png';
import systems from '../assets/systems.png';
import Button from './Button';

export default function ATMScreen({
  title = 'Welcome to the ATM',
  buttons = [],
}) {
  const handleButtonClick = (buttonId) => {
    console.log(`${buttonId} button clicked`);
  };

  return (
    <>
      <div className="bg-[#72acce] flex flex-col justify-between p-4 border-4 border-gray-300 text-white font-mono w-60 h-50 relative">
        <div className="text-center mt-2 font-bold text-xs">{title}</div>
        {buttons.map((button) => (
          <Button
            key={button.id}
            side={button.side}
            index={button.index}
            label={button.label}
            onClick={button?.onClick}
          />
        ))}
        <img
          className="absolute -bottom-27/50 -left-2/10"
          src={stickerGraf}
          alt="ATM Decoration"
        />
      </div>
      <div className="relative w-60 flex justify-end items-end">
        <img
          className="mt-1 h-auto max-w-full object-contain"
          src={systems}
          alt="ATM Systems Panel"
        />
      </div>
    </>
  );
}
