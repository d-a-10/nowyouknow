import React from 'react';
import { Parallax, Background } from 'react-parallax';

interface ParallaxProps {
    imgUrl: string;
    title: string;
    ageRating1: string;
    ageRating2: string;
}

const ParallaxBackground: React.FC<ParallaxProps> = ({ imgUrl, title, ageRating1, ageRating2 }) => {
    return (
        <Parallax strength={199}>
            <Background className="w-screen h-screen bg-cover">
                <div className='w-full h-full relative'>
                    <img className='object-cover w-full h-full' src={imgUrl} alt="movie poster" />
                </div>
            </Background>

            <div className=' w-screen min-h-screen text-center'>
                <div className='bg-black  w-screen bg-opacity-60 py-4 inset-x-0 bottom-0 absolute'>
                    <p className=' text-white text-4xl md:text-6xl font-bold'>{title}</p>
                    <div className=' flex text-white justify-center mt-4 gap-3'>
                        <p className=' backdrop-blur-sm bg-white/30  rounded px-2 text-sm '>{ageRating1}</p>
                        <p className=' backdrop-blur-sm bg-white/30  rounded px-2 text-sm'>{ageRating2}</p>
                    </div>

                    <div className=' h-28'>
                        <div className='icon-scroll scale-75'></div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

ParallaxBackground.defaultProps = {
    title: 'Arcane',
    ageRating1: '12+',
    ageRating2: 'PG-15',
};

export default ParallaxBackground;
