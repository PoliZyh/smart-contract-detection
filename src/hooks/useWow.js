
import WOW from "wow.js";

export default function useWow() {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();

  return wow;
}