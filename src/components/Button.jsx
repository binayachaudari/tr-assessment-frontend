import clsx from 'clsx';

export default function Button({
  side = 'left',
  index = 0,
  onClick,
  label = 'label',
}) {
  const isLeft = side === 'left';
  const topOffset = 16 + index * 8; // Base 16 + 8 gap per index (in Tailwind units)

  const buttonContainerClasses = clsx(
    'absolute flex items-center',
    isLeft ? '-left-12' : '-right-12'`top-${topOffset}`
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
    'relative text-white font-mono text-sm',
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
      {!isLeft && label && <LabelComponent className="mr-7" />}

      <button type="button" onClick={onClick} className={buttonClasses} />

      {/* For left side, render button first, then label */}
      {isLeft && label && <LabelComponent className="ml-7" />}
    </div>
  );
}
