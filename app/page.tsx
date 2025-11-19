import Header from './sections/Header';
import Main from './sections/Main';
import Dock from './components/Dock';

export default function Home() {
  return (
   <div className="bg-[url('/wall.jpg')] bg-cover bg-center min-h-screen ">

      <Header/>
      <Main />
      <Dock />
      
    </div>
  );
}
