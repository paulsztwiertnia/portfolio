'use client'
import Image from 'next/image';

const Card = ({title, description, src, url, color, i}: {title: string, description: string, src: string, url: string, color: string, i: number}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div 
        className="flex flex-col relative w-[90%] max-w-[1000px] p-[50px] rounded-[25px] origin-top"
        style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}
      >
        <h2 className="text-center m-0 text-[28px]">{title}</h2>
        <div className="flex gap-[50px] mt-[30px]">
          <div className="w-[40%] flex flex-col justify-between">
            <p className="text-base first-letter:text-[28px] first-letter:font-['Title']">
              {description}
            </p>
            <span className="flex items-center gap-[5px]">
              <a href={url} target="_blank" className="text-xs underline cursor-pointer">
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-[500px]">
            <div className="relative w-full h-full">
              <Image
                width={600}
                height={600}
                src={`${src}`}
                alt="image"
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card