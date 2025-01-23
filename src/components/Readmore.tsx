export default function Readmore({
  url,
  description,
  linkText,
  iconSrc
}: {
  url: string
  description: string
  linkText: string
  iconSrc?: string
}) {
  return (
    <>
      {iconSrc ? (
        <div className='relative my-10 grid grid-cols-[minmax(5rem,10%)_1fr] items-center gap-4 border-y border-neutral-500 py-4'>
          <div className='not-prose aspect-square w-full overflow-hidden rounded-md'>
            <img src={iconSrc} alt='' className='not_fullscreen_media' />
          </div>
          <p className='!mb-0 !mt-0 italic'>
            <span className=''>
              Readmore: {description}
              <a href={url} target='_parent' className='text-neutral-200'>
                {linkText}
              </a>
            </span>
          </p>
        </div>
      ) : (
        <div className='relative my-10 grid items-center gap-4 border-y border-neutral-500 py-4'>
          <p className='!mb-0 !mt-0 italic'>
            <span className=''>
              Readmore: {description}
              <a href={url} target='_parent' className='text-neutral-200'>
                {linkText}
              </a>
            </span>
          </p>
        </div>
      )}
    </>
  )
}
