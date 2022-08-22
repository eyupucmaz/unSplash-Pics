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
    <ul
      className={
        'w-screen p-4 flex flex-wrap items-center justify-center gap-3'
      }
    >
      {images?.map((image: any) => (
        <div
          className="basis-80 h-80 cursor-pointer relative transition-all grow bg-slate-200 border-4 shadow-md rounded hover:scale-105 "
          key={image.id}
        >
          <img
            src={image.urls.regular}
            loading={'lazy'}
            className="object-cover w-full h-full align-middle rounded"
            alt={image.alt_description}
          />
        </div>
      ))}
    </ul>
  );
}
