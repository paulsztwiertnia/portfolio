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
        <div className="flex flex-row justify-center mt-5 w-full rounded-md bg-gray-50">
            <div className="flex flex-row justify-center w-full max-w-7xl">
                <div className="flex flex-col justify-end items-end w-1/2 py-8 px-8">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={600}
                        className="rounded-md w-full h-auto"
                    />     
                </div> 
                <div className="flex flex-col justify-center items-start w-1/2 px-4">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-sm text-left mb-2 font-open-sans">{description}</p>
                    <div className="flex flex-row items-center gap-2">
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                <Image src={`/icons/${tech}`} alt={tech} width={40} height={40} />
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md text-xs hover:bg-primary-dark transition-colors mt-3"
                        onClick={() => window.open(link, '_blank')}
                    >
                        View Project
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;