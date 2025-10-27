import Link from 'next/link';
import React from 'react';

type CtaButtonProps = {
  href: string;
  bg: string;
  children: React.ReactNode;
};

const CtaButton = ({ href, bg, children }: CtaButtonProps) => {
  return (
    <Link href={href} className={`px-6 py-[13px] rounded-[30px] ${bg}`}>
      {children}
    </Link>
  );
};

export default CtaButton;
