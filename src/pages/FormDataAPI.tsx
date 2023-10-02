import { ChangeEvent, FormEvent, useRef, useState } from 'react';

const ContentEditable = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const formData = new FormData(formRef.current || undefined);
  const [result, setResult] = useState({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formData.append(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    e.preventDefault();
    setResult(() => Object.fromEntries(formData));
    formRef.current.reset();
  };

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-24'>
      <h1 className='text-3xl font-bold tracking-tighter text-black sm:text-5xl xl:text-6xl/none '>
        FormDataAPI
      </h1>
      <div className='max-h-[300px] w-[800px] p-6 bg-white shadow-md rounded-lg'>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Age
            </label>
            <input
              type='number'
              id='age'
              name='age'
              className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              onChange={handleInputChange}
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='w-[800px] p-6 bg-white shadow-md rounded-lg'>
        {result && (
          <pre className='text-black'>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </section>
  );
};

export default ContentEditable;
