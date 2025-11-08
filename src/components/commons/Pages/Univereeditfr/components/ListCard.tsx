import { Typographie } from '@/app/components/Typographie';
import React from 'react';

interface ListCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

const ListCard = ({ icon: Icon, title, subtitle }: ListCardProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="glass-icon-jaune flex justify-center items-center rounded-2xl w-12 h-12">
        <Icon width={24} height={24} color="#FCD509" />
      </div>
      <div className="flex flex-col">
        <Typographie className="text-white">{title}</Typographie>
        <Typographie className="text-white opacity-60">{subtitle}</Typographie>
      </div>
    </div>
  );
};

export default ListCard;
