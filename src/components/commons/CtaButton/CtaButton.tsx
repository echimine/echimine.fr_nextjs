import { Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CtaButtonProps = {
  href: string;
  bg?: string;
  icon?: string;
  children: React.ReactNode;
};

const CtaButton = ({ href, bg, icon, children }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className={`px-6 py-[13px] rounded-[30px] text-center ${bg}`}
    >
      {icon && <Image src={icon} alt="" />} {children}
    </Link>
  );
};

export default CtaButton;
