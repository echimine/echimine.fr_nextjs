import { Typographie } from '../Typographie';

const Header = () => {
  return (
    <header className="flex justify-center sticky top-0 z-30 bg-white">
      <div className="py-10  w-[80%] h-[100px] flex items-center justify-center rounded-lg">
        <div className="w-full h-full flex justify-between items-center ">
          <div className="font-archivo text-2xl">
            <Typographie component="a" variant="h4" href="/">
              EC
            </Typographie>
          </div>
          <div>
            <ul className="flex gap-4">
              <li className="font-archivo">
                <Typographie component="a" href="/mes-creations">
                  Mes créations
                </Typographie>
              </li>
              <li className="font-archivo">Réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
