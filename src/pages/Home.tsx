import HTML2023 from '../assets/html2023.png';

const Home = () => {
  return (
    <section className='w-full h-screen py-24 bg-black flex justify-center'>
      <div className='space-y-2 flex flex-col items-center'>
        <img
          src={HTML2023}
          alt='State of HTML 2023 Logo'
          className='w=[600px] h-[400px]'
          loading='lazy'
        />
        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-950'>
          State of HTML 2023 inspired components
        </h1>
        <p className='max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 text-center'>
          Exploring Cutting-Edge HTML Components That Shape the Web's Future
        </p>
      </div>
    </section>
  );
};

export default Home;
