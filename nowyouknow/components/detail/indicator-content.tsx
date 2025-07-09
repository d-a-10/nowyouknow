import React, { FC } from 'react';

export interface IndicatorContentProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode
}

const IndicatorContent: FC<IndicatorContentProps> = ({ title, icon, children }) => {
    return (
        <>
            <div className='text-center'>
                {icon}
            </div>
            <p className=' text-white text-xl mt-2'>{title}</p>
            <article className=' text-slate-500 text-sm mt-2 prose prose-invert text-justify'>
                {children}
            </article>
        </>
    );
};

export default IndicatorContent;
