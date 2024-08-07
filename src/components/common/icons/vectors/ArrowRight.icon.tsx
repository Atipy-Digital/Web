import { IconProps } from './interface';

export const ArrowRightIcon = (props: IconProps) => {
  return (
    <svg
      {...props}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z'
      />
    </svg>
  );
};
