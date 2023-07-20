import { ErrorSection } from '@/components/sections/common/error';

export default function NotFound() {
  return (
    <ErrorSection
      title='404'
      labelCTA='Retour à la page Digital'
      link='/expertises/digital'
    />
  );
}
