const ContentEditable = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-24'>
      <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none '>
        ContentEditable
      </h1>
      <div className='max-h-[300px] w-[800px] p-6 bg-white shadow-md rounded-lg'>
        <h2
          contentEditable
          className='w-full text-3xl font-bold text-black sm:text-5xl xl:text-6xl/none focus:outline-blue-500'
        >
          This heading is ContentEditable
        </h2>
      </div>
    </section>
  );
};

export default ContentEditable;
