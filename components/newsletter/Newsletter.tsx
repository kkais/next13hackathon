const Newsletter = () => {
  return (
    <section className="relative z-[1] flex flex-col items-center justify-center p-40 text-center">
      <div className="absolute z-[-1] text-[7.5rem] font-extrabold leading-[151px] text-[#f2f3f7]">Newsletter</div>
      <h1 className='mb-4 text-[2rem] font-bold leading-10 tracking-[0.03em] text-[#212121]'>Subscribe Our Newsletter</h1>
      <p className='mb-8 text-base font-light text-[$212121]'>Get the latest information and promo offers directly</p>
      <form>
        <input type="email" placeholder="Input email address" className='border border-gray-600 bg-[#fcfcfc] py-[10px] pl-5 pr-[120px] text-xs' />
        <button type="submit" className='ml-[10px] bg-black px-5 py-[10px] text-[0.9rem] font-semibold leading-4 text-white'>Get Started</button>
      </form>
    </section>
  )
}

export default Newsletter
