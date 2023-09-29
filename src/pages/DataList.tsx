const DataList = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-24'>
      <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none '>
        Datalist
      </h1>
      <div className='w-[300px] p-6 bg-white shadow-md rounded-lg'>
        <label htmlFor='browser' className='mb-2 font-semibold text-gray-700'>
          Choose your browser from the list:
        </label>
        <input
          list='browsers'
          name='browser'
          id='browser'
          className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
        <datalist id='browsers'>
          <option value='Edge' />
          <option value='Firefox' />
          <option value='Chrome' />
          <option value='Opera' />
          <option value='Safari' />
        </datalist>
      </div>
    </section>
  );
};

export default DataList;
