# Markdown to TC-scrolly

Use a markdown file to generate a scrollytelling story in React

## Files

Drop your markdown content into the `./src/article.mdx` file. Keep the imports as-is.

## Setup

You can apply some basic article styling using the `ArticleSetup` component at the top of the article

```js
<ArticleSetup
  theme='dark' // 'dark'|'light'
  title='A scrolly layout'
  dropCap={true} // first letter is big or regular, boolean
  author='' // SEO in head, string
  image='' // sets article embed image in the html head, string
  keywords={['']} // sets keywords for SEO, string[]
  standfirst='' // SEO, string
/>
```

## Title

Use the `TitleSection` component to create a full-height title screen. Add media as children of the component.

```js
<TitleSection
  title=''
  standFirst=''
  publishDate={new Date()}
  author='' // string
  authorLink='' // string
  authorAffiliation='' // string
  authorAffiliationLink='' // string
  className='' // string
  clipped={false} // boolean
  textBackground={true} // boolean
></TitleSection>
```

## Insert an image

Use the `Image` component to insert a figure element with img

```js
<Image
  src='' // string
  alt='' // string
  loading='' // string
  caption='' // string
  source='' // string
  sourceLink='' // string
  className='' // ? string
  imgClassName='' // ? string
  align='' // ? string
/>
```

## Insert art-directed Picture

Use the `Picture` component, with the x and y coordinates for where you want the image positioned at each breakpoint.

```js
<Picture
  src='https://images.theconversation.com/files/627222/original/file-20241022-20-4x1vlk.jpg'
  alt='' // string
  loading='' // string
  className='' // string
  imgClassName='' // string
  caption='' // string
  source='' // string
  sourceLink='' // string
  focalPoint={{
    mobile: { x: 0.5, y: 0.5 },
    tablet: { x: 0.5, y: 0.5 },
    tabletLandscape: { x: 0.5, y: 0.5 },
    laptop: { x: 0.5, y: 0.5 },
    desktop: { x: 0.5, y: 0.5 }
  }}
/>
```

## Insert CSS background image

Use the `BackgroundImage` component. This will automatically fetch an image cropped to the size of the container - good for when you want an image to efficiently fit inside a space.

```js
<BackgroundImage
  src='' // string
/>
```

## Insert scrolly section

Use the below pattern to insert a scrolly section. Make sure to use the `make_visible` classname on the first figure. Add the `step` property with a boolean to make that section trigger a change in the background (don't add a step to the first text chapter).

```js
<ScrollSection pinType='pin_clipped' className='my-12'>
  <ScrollBackground>
    <Picture
      src='https://images.theconversation.com/files/627222/original/file-20241022-20-4x1vlk.jpg'
      loading='eager'
      className='full_screen_media make_visible'
      imgClassName='object-bottom-center'
      caption='Testing the caption.'
      source='The Conversation'
      sourceLink=''
      alt=''
      focalPoint={{
        mobile: { x: 0.5, y: 0.5 },
        tablet: { x: 0.5, y: 0.5 },
        tabletLandscape: { x: 0.5, y: 0.5 },
        laptop: { x: 0.5, y: 0.5 },
        desktop: { x: 0.5, y: 0.5 }
      }}
    />
  </ScrollBackground>
  <ScrollForeground>
    <ScrollTextChapter className='mt-[20vh]' position='center'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum nulla esse accusantium maiores laborum
      similique rerum quam ad qui.
    </ScrollTextChapter>
    <ScrollTextChapter step='step' position='center'>
      Perferendis porro eveniet placeat, rerum soluta blanditiis natus. Iure itaque odit a quibusdam quidem rerum
      expedita ratione nesciunt dolorum omnis.
    </ScrollTextChapter>
    <ScrollTextChapter step='step' position='center'>
      Dolorum praesentium tempore quod eius alias, harum officiis provident at quia porro sequi? Quo quidem ipsam
      corrupti numquam tempora laudantium!
    </ScrollTextChapter>
  </ScrollForeground>
</ScrollSection>
```
