import clsx from 'clsx';

export default function Button({
  side = 'left',
  index = 0,
  onClick,
  label = 'label',
}) {
  const isLeft = side === 'left';
  const topOffset = 16 + index * 8; // Base 16 + 8 gap per index (in Tailwind units)

  return (
    <div
      className={clsx(
        'absolute flex items-center',
        `top-${topOffset}`,
        isLeft ? '-left-12' : '-right-12'
      )}
    >
      {/* For right side, render label first, then button */}
      {!isLeft && label && (
        <div className="mr-7 relative">
          <span
            className={clsx(
              "before:content-[''] before:absolute before:top-1/2 before:w-3 before:h-[2.5px] before:bg-white before:-translate-y-1/2",
              'before:left-full mr-1'
            )}
          >
            {label}
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={onClick}
        className={clsx(
          'relative w-8 h-5 bg-[#b9b9b9] border-t-2 border-b-2 rounded border-t-[#d4d4cf] border-b-[#909090]',
          "after:content-[''] after:absolute after:top-1/2 after:w-3 after:h-[2.5px] after:bg-[#909090] after:-translate-y-1/2",
          isLeft ? 'after:left-full' : 'after:right-full'
        )}
      />

      {/* For left side, render button first, then label */}
      {isLeft && label && (
        <div className="ml-7 relative">
          <span
            className={clsx(
              "before:content-[''] before:absolute before:top-1/2 before:w-3 before:h-[2.5px] before:bg-white before:-translate-y-1/2",
              'before:right-full ml-1'
            )}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
