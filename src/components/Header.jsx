import logo from '../assets/logo.png';
// we have configured the font in tailwind.config.js file as whenever we will add font-title in tailwind css then we will use the font indicated in that file
export default function Header() {
  // in header mb ie margin bottom will be applied 8 but if the min width available is greater than 768px then our mb 16 would be applied or else it would not get applied
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas"  className=" object-contain mb-8 w-44 h-44 "/>
      <h1 className=" text-xl  md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
