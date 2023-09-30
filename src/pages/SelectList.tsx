const SelectList = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center gap-4 py-24'>
        <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none '>
          SelectList
        </h1>
        <code className='text-center'>
          <pre>
            currently not supported, hidden behind "
            <i>Experimental Web Platform features</i>" flag in{' '}
            <b>chrome://flags</b>
          </pre>
          <pre>easy to style with CSS!</pre>
        </code>
        <div className='w-[300px] p-6 bg-white shadow-md rounded-lg'>
          <p className='mb-2 font-semibold text-gray-700'>
            Choose your browser from the list:
          </p>
          {/* @ts-expect-error Property 'selectmenu' does not exist on type 'JSX.IntrinsicElements'.ts(2339) */}
          <selectmenu
            className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  [&>*]:h-6 [&>*]:border [&>*]:text-center'
            id='browsers'
          >
            <option value='Edge'>Edge</option>
            <option value='Firefox'>Firefox</option>
            <option value='Chrome'>Chrome</option>
            <option value='Opera'>Opera</option>
            <option value='Safari'>Safari</option>
            {/* @ts-expect-error Property 'selectmenu' does not exist on type 'JSX.IntrinsicElements'.ts(2339) */}
          </selectmenu>
        </div>
      </section>
    </>
  );
};

export default SelectList;
