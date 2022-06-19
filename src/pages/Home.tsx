import { useEffect } from 'react';
import HomeCard from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
  useEffect(() => {
    getStarWars();
  }, []);

  const getStarWars = async () => {
    const data = await fetch('https://swapi.dev/api/people/1');
    data.json().then((d) => console.log(d));
  };

  return (
    <>
      <div className="home-hero">
        <div className={'hero-content show'}>
          <div className="font-extrabold text-4xl">
            Feeling stuck, but want the
            <span className="gradient-text font-extrabold text-4xl ml-2">
              Extroradiary
            </span>
          </div>
          <div className="font-extrabold text-xl">
            That is how I have felt working on some projects, but wanted to take
            them to the <span className="hi-gradient mr-1">next level.</span>
            That is why I started this project, my home project. It is not much
            now, but with the power of React and me, it is going to bloom!
          </div>
        </div>
        <div className="hero-content show">
          <HomeCard
            title={'A future writeup of the site'}
            body={
              'Thanks to technogigies like, React, Mantine, Tailwind, and Firebase, a website like this is possible for anyone to make. The hardest part is deciding what something is going to look like.'
            }
            show={true}
            index={1}
            moveHandler={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
