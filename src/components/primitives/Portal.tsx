import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  id?: string;
  onMount?: () => void;
  children?: ReactNode;
  className?: string;
};

export const Portal = ({
  children,
  id = 'atipy-portal',
  onMount,
  className,
}: Props) => {
  const ref = useRef<HTMLElement>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    let portal: HTMLElement | undefined = undefined;
    const existingPortal = document.getElementById(id) as HTMLElement | null;
    if (existingPortal) {
      portal = existingPortal;
    } else {
      portal = document.createElement('div');
      portal.id = id;
      document.body.appendChild(portal);
    }
    portal.className = className ?? '';
    ref.current = portal;
    setIsMounted(true);
  }, [className, id]);

  useEffect(() => {
    if (isMounted && onMount) onMount();
  }, [isMounted, onMount]);

  return isMounted && ref.current ? createPortal(children, ref.current) : <></>;
};
