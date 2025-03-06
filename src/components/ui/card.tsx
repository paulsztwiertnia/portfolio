'use client'
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  i: number;
}

const Card = ({title, description, src, url, color, i}: CardProps) => {
  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] md:h-screen flex items-center justify-center sticky top-[100px] sm:top-[120px] md:top-[150px]">
      <div 
        className="flex flex-col relative w-full md:w-[90%] max-w-[1000px] p-6 md:p-[50px] rounded-[25px] origin-top "
        style={{
          backgroundColor: color, 
          zIndex: 7 - i,
          top: (() => {
            if (window.innerWidth >= 768) { // md breakpoint
              return `calc(${i} * 15px)`;
            }
            else {  
              switch (i) {
                case 0: return '30px';
                case 1: return '45px';
                case 2: return '45px';
                case 3: return '45px';
                case 4: return '45px';
                case 5: return '45px';
                case 6: return '45px';
              }
            }
          })(),
        }}
      >
        <h2 className="text-center m-0 text-xl md:text-3xl">{title}</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[50px] mt-4 md:mt-[30px]">
          <div className="w-full md:w-[40%] flex flex-col ">
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-open-sans">
              {description}
            </p>
            <span className="flex items-center gap-[5px] mt-3 md:mt-5">
              <a href={url} target="_blank" className="underline cursor-pointer underline-offset-2 font-open-sans text-sm sm:text-base">
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[60%] h-[150px] sm:h-[180px] md:h-[300px] mt-3 md:mt-0">
            <div className="relative w-full h-full">
              <Image
                width={600}
                height={600}
                src={`${src}`}
                alt="image"
                className="object-cover rounded-md border-2 h-full w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card