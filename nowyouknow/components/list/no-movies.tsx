
import React from 'react';
import { PrimaryIcon } from '../common/primary-icon';
import IndicatorContent from '../detail/indicator-content';
import ReactMarkdown from 'react-markdown';
import { AiFillCloseCircle } from 'react-icons/ai';

const NoMovie: React.FC = () => (
    <div className=' mt-4 px-4 py-6 bg-slate-800 rounded'>
        <IndicatorContent
            title="لم يتم العثور على الفيلم"
            icon={
                <div className=' flex justify-center '>
                    <PrimaryIcon>
                        <AiFillCloseCircle />
                    </PrimaryIcon>
                </div>
            }
        >
            <ReactMarkdown>
                عذرًا، لم يتم العثور على الفيلم المطلوب. يرجى المحاولة مرة أخرى في وقت لاحق. شكرًا لتفهمكم
            </ReactMarkdown>
        </IndicatorContent>
    </div>

);

export default NoMovie;