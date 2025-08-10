import clsx from 'clsx';

export default function Button({
  side = 'left',
  index = 0,
  onClick,
  label = null,
}) {
  const isLeft = side === 'left';

  const offsetClasses = {
    0: 'top-16',
    1: 'top-24',
    2: 'top-32',
    3: 'top-40',
  };

  const buttonContainerClasses = clsx(
    'absolute flex items-center',
    offsetClasses[index],
    isLeft ? '-left-12' : '-right-12'
  );

  const buttonClasses = clsx(
    'relative w-8 h-5 bg-[#b9b9b9] border-t-2 border-b-2 rounded',
    'border-t-[#d4d4cf] border-b-[#909090] cursor-pointer',
    'transition-all duration-150 hover:brightness-110',
    "after:content-[''] after:absolute after:top-1/2 after:w-3 after:h-[2.5px]",
    'after:bg-[#909090] after:-translate-y-1/2',
    isLeft ? 'after:left-full' : 'after:right-full'
  );

  const labelClasses = clsx(
    'text-white font-mono text-xs font-bold',
    "before:content-[''] before:absolute before:top-1/2 before:w-3",
    'before:h-[2.5px] before:bg-white before:-translate-y-1/2'
  );

  const LabelComponent = ({ className }) => (
    <div className={className}>
      <span
        className={clsx(
          labelClasses,
          isLeft ? 'before:right-full ml-1' : 'before:left-full mr-1'
        )}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className={buttonContainerClasses}>
      {/* For right side, render label first, then button */}
      {!isLeft && label && <LabelComponent className="relative mr-7" />}

      <button type="button" onClick={onClick} className={buttonClasses} />

      {/* For left side, render button first, then label */}
      {isLeft && label && <LabelComponent className="relative ml-7" />}
    </div>
  );
}
