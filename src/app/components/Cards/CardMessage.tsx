import Image from 'next/image';
import { Typographie } from '../Typographie';

// components/Card.tsx
interface CardProps {
  image: string;
  name: string;
  description: string;
}

export const Card = ({ image, name, description }: CardProps) => {
  return (
    <div className="bg-white border-[var(--jaune)] p-2 rounded-2xl flex gap-8 items-center">
      <Image
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div>
        <Typographie variant="h5" component="h5">
          {name}
        </Typographie>
        <Typographie variant="h6" component="h6">
          {description}
        </Typographie>
      </div>
    </div>
  );
};
