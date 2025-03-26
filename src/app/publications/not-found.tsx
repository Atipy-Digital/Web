import { ErrorSection } from '@/components/sections/common/error';

export default function NotFound() {
  return (
    <ErrorSection
      title='404'
      labelCTA='Voir toutes les publications'
      link='/publications'
    />
  );
}
