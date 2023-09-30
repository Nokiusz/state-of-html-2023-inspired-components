import { useRef } from 'react';

const ShowPicker = () => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const handleShowPicker = () => {
    if (!datePickerRef.current) {
      return;
    }

    datePickerRef.current.showPicker();
  };

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-24'>
      <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none '>
        showpicker()
      </h1>
      <div className='w-[300px] p-6 bg-white shadow-md rounded-lg flex flex-col'>
        <input
          ref={datePickerRef}
          name='date-picker'
          id='date-icker'
          type='date'
          className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
        <button
          className='px-3 py-2 mx-auto mt-5 text-black border border-gray-300 rounded-md bg-slate-300 focus:outline-none focus:border-blue-500'
          onClick={handleShowPicker}
        >
          Show Picker
        </button>
      </div>
    </section>
  );
};

export default ShowPicker;
