import { ReactNode } from 'react'

export function Disclosures({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h2>Disclosure statement</h2>
      {children}
    </div>
  )
}

export function Acknowledgements({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h2>Acknowledgements</h2>
      {children}
    </div>
  )
}

export function Authors({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h2>Authors</h2>
      <div className='grid gap-2'>{children}</div>
    </div>
  )
}

export function Editorial({ children }: { children?: ReactNode }) {
  return <div className='grid gap-0 sm:grid-cols-2 sm:gap-8'>{children}</div>
}

export function Editors({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h2>Editorial production</h2>
      <div className='grid gap-2'>{children}</div>
    </div>
  )
}

export function Author({
  name,
  title,
  affiliation,
  imgSrc,
  profileLink,
  affiliationLink
}: {
  name: string
  title: string
  affiliation: string
  imgSrc: string
  profileLink: string
  affiliationLink: string
}) {
  return (
    <div>
      <a className='font-base font-bold' href={profileLink}>
        <img
          loading='lazy'
          alt=''
          className='not-prose float-left mb-5 mr-4 block h-12 w-12 rounded-full'
          src={imgSrc}
        />
        <span className='text-xs'>{name}</span>
      </a>

      <p className='not-prose m-0 ml-16 block text-xs'>
        {title}
        {affiliation ? (
          affiliationLink ? (
            <>
              ,&nbsp;
              <a className='underline hover:text-neutral-100' href={affiliationLink} target='_blank'>
                {affiliation}
              </a>
            </>
          ) : (
            <>,&nbsp;{affiliation}</>
          )
        ) : (
          ''
        )}
      </p>
    </div>
  )
}

export default function AuthorSection({ children }: { children?: ReactNode }) {
  return (
    <>
      <hr className='!mb-3 w-full max-w-none' />
      <aside className='grid max-w-none text-sm'>{children}</aside>
    </>
  )
}
