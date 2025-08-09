import { useCallback, useRef, useState } from 'react';
import sprite from '../assets/creditcard_sprite.png';
import {
  CARD_BRANDS,
  getCardBrandIndex,
  isValidCardBrand,
} from '../constants/cardBrands';

const CARD_BRAND_PADDING = 5;

export default function CardType({ activeBrand = null }) {
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;

    const { naturalWidth: totalWidth, naturalHeight: totalHeight } = img;
    setFrameSize({
      width: (totalWidth + CARD_BRAND_PADDING) / CARD_BRANDS.length,
      height: totalHeight / 2,
    });
  }, []);

  const activeIndex = isValidCardBrand(activeBrand)
    ? getCardBrandIndex(activeBrand)
    : null;

  const isFrameLoaded = frameSize.width > 0;

  return (
    <div className="flex justify-around items-center my-4">
      <img
        ref={imgRef}
        src={sprite}
        alt=""
        className="hidden"
        onLoad={handleImageLoad}
      />

      {/* Render card brand sprites */}
      {isFrameLoaded &&
        CARD_BRANDS.map((brand, index) => {
          const isActive = activeIndex === index;
          const backgroundX = `-${index * frameSize.width}px`;
          const backgroundY = isActive ? '0px' : `-${frameSize.height}px`;

          return (
            <div
              key={brand}
              className="bg-no-repeat"
              style={{
                backgroundImage: `url(${sprite})`,
                backgroundPosition: `${backgroundX} ${backgroundY}`,
                width: `${frameSize.width}px`,
                height: `${frameSize.height}px`,
              }}
            />
          );
        })}
    </div>
  );
}
