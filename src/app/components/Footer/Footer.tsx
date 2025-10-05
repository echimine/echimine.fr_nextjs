import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="h-screen flex justify-end flex-col bg-jaune">
      <Image
        src="/images/logo/footer-echimine.svg"
        alt=""
        className="w-full"
        height={0}
        width={0}
        sizes="100vw"
      />
    </footer>
  );
};

export default Footer;
