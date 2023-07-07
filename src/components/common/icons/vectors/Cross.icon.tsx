import { IconProps } from './interface';

export const CrossIcon = (props: IconProps) => {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'>
      <path
        d='M1 8h24v2H1z'
        fill='currentColor'
        data-svg-origin='13 9'
        data-original='M1 8h15v2H1z'
        transform='matrix(0.70711,0.70711,-0.70711,0.70711,10.17156,-0.55642)'
      ></path>
      <line
        x1='1'
        y1='15'
        x2='25'
        y2='15'
        stroke='currentColor'
        strokeWidth='2'
        data-svg-origin='13 15'
        transform='matrix(0.1,0,0,0.1,11.7,13.5)'
      ></line>
      <path
        d='M1 20h24v2H1z'
        fill='currentColor'
        data-svg-origin='13 21'
        transform='matrix(0.70711,-0.70711,0.70711,0.70711,-11.04174,9.34312)'
      ></path>
    </svg>
  );
};
