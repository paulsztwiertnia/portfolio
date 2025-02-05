import Image from 'next/image';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link: string;
    techStack: string[];
}


const Project = ({ title, description, image, link, techStack }: ProjectProps) => {
    return (
        <div className="flex flex-row justify-center mt-10 w-full">
            <div className="flex flex-row justify-center w-5/6 rounded-md bg-slate-200">
                <div className="flex flex-col justify-center items-center w-full py-8 ms-8">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={600}
                        className="rounded-md"
                    />     
                </div> 
                <div className="flex flex-col justify-center items-start ml-10">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-sm text-left mb-2 font-open-sans w-5/6">{description}</p>
                    <div className="flex flex-row items-center gap-2">
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                <Image src={`/icons/${tech}`} alt={tech} width={40} height={40} />
                            </div>
                        ))}
                    </div>
                    {/* <button
                        className="bg-primary text-white px-4 py-2 rounded-md text-xs hover:bg-primary-dark transition-colors"
                        onClick={() => window.open(link, '_blank')}
                    >
                        View Project
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default Project;