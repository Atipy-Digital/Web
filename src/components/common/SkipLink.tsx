import clsxm from '@/lib/clsxm';

type Props = {
  isTabbing: boolean;
};

const SkipLink = ({ isTabbing }: Props) => {
  const skipTopClass = isTabbing ? 'fixed top-0 left-0 z-20' : '';
  return (
    <div
      className={clsxm(
        skipTopClass,
        'bg-gray-100 dark:bg-gray-950 text-black dark:text-white text-sm p-2 w-full flex items-center justify-center'
      )}
    >
      <a href='#top' className='mr-2'>
        Aller au contenu principal
      </a>
    </div>
  );
};

export default SkipLink;
