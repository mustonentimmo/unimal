import cn from 'classnames';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import styles from './ImageCarousel.module.scss';

const ImageCarousel = ({ images }) => {
  const options = { delay: 4000, stopOnInteraction: true }; // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);

  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles['embla']}>
      <div className={styles['embla__viewport']} ref={viewportRef}>
        <div className={styles['embla__container']}>
          {images.map((src, index) => (
            <div className={styles['embla__slide']} key={index}>
              <div className={styles['embla__slide__inner']}>
                <Image src={src} width="100%" height="100%" layout="fill" objectFit="cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={cn(styles['embla__button'], styles['embla__button--prev'])}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <IoIosArrowBack />
      </button>
      <button
        className={cn(styles['embla__button'], styles['embla__button--next'])}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default ImageCarousel;
