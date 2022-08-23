import React, { useEffect, useState } from 'react';

interface Props {
  images: Array<object> | any;
}

export default function ImageList(props: Props) {
  const [images, setImages] = useState(props.images);

  // images = this.props.images?.map((Image: any) => {
  //   console.log(Image);
  //   return <img src={Image.urls.regular} alt={Image.alt_description} />;
  // });
  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

  return (
    <ul className={'w-full flex flex-wrap items-center justify-center gap-3'}>
      {images?.map((image: any) => (
        <img
          src={image.urls.regular}
          key={image.id}
          loading={'lazy'}
          className="object-cover w-full  rounded basis-80 h-80 cursor-pointer relative transition-all grow  border-4 shadow-md  hover:scale-105"
          alt={image.alt_description}
        />
      ))}
    </ul>
  );
}
