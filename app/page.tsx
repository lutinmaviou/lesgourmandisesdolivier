import Image from 'next/image';
import './page.css';

export default function Home() {
  return (
    <div className="container">
      <div
        className="grid background"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100%, auto))',
        }}
      >
        <div className="back">
          <Image src="/fond.png" alt="Image de fond" fill sizes="100vw" />
        </div>
        <h1 className="main-title">
          Les Gourmandises d'<span className="red-letter">O</span>livier
        </h1>
        {/* <h4 className="contact">
          <span className="underline">Mobile</span>: 06 28 02 38 16 /{' '}
          <span className="underline">email</span> : lesgourmandisesdolivier@gmail.com{' '}
        </h4> */}
      </div>
      <main className="main">
        <h2 className="h2">Site en cours de réalisation</h2>
        <h3 className="h3">A très bientôt !</h3>
        <div className="gif">
          <Image
            src="/gif-en-construction.gif"
            alt="construction"
            width={200}
            height={200}
          />
        </div>
      </main>
    </div>
  );
}
