export default function Readmore({
  url,
  description,
  linkText
}: {
  url: string
  description: string
  linkText: string
}) {
  return (
    <p className='my-10 border-y border-neutral-500 py-4 italic'>
      <span className=''>
        Readmore: {description}
        <a href={url} target='_parent' className='text-neutral-200'>
          {linkText}
        </a>
      </span>
    </p>
  )
}
