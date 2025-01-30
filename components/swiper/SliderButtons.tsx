import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const SliderButtons: React.FC<{
  continerStyle: string;
  btnStyle: string;
}> = ({ continerStyle, btnStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={`${continerStyle}`}>
      <button className={`${btnStyle}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={`${btnStyle}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderButtons;
