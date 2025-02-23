export default function Readmore() {
  return (
    <div className='relative my-10 grid grid-cols-[minmax(5rem,10%)_1fr] gap-4 border-y border-neutral-500 py-4 sm:grid-cols-[minmax(8rem,10%)_1fr]'>
      <div className='not-prose aspect-square w-full overflow-hidden rounded-md'>
        <a href='#' target='_parent' className='text-neutral-100 hover:text-neutral-200'>
          <img
            src='https://images.theconversation.com/files/645965/original/file-20250130-15-bubzm1.png?ixlib=rb-4.1.0&q=20&auto=format&w=128'
            alt=''
            className='not_fullscreen_media h-32 w-32 max-sm:h-20 max-sm:w-20'
          />
        </a>
      </div>
      <p className='!mb-0 !mt-0 italic'>
        <a
          href='https://theconversation.com/scam-factories-the-inside-story-of-southeast-asias-brutal-fraud-compounds-250448'
          target='_parent'
          className='text-neutral-100 hover:text-neutral-200'
        >
          Scam Factories
        </a>{' '}
        is a special multimedia and podcast series by The Conversation. Listen to the{' '}
        <a
          href='https://theconversation.com/it-seemed-like-a-good-job-at-first-how-people-are-trafficked-trapped-and-forced-to-scam-in-southeast-asia-scam-factories-podcast-ep-1-250444'
          target='_parent'
          className='text-neutral-100 hover:text-neutral-200'
        >
          podcast series here
        </a>
        .
      </p>
    </div>
  )
}
