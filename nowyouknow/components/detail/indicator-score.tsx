import React from 'react';
import { Tooltip } from 'react-tippy';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export interface IndicatorScoreProps {
    name: string;
    percentage?: number;
    tooltipText: string;
}

const IndicatorScore: React.FC<IndicatorScoreProps> = ({ name, percentage, tooltipText }) => {
    return (
        <Tooltip
            title={tooltipText}
            position="top"
            trigger="click"
            size="small"
        >
            <div className="bg-slate-800 rounded p-2">
                <div className="flex justify-between gap-2">
                    <p className="text-slate-500 text-xs">{name}</p>
                    <div className="text-slate-300 text-xs font-bold my-auto">
                        <AiOutlineInfoCircle />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className=' flex '>
                        <p className="text-slate-500 text-sm my-auto">%&nbsp;</p>
                        <p className="text-white text-lg">{percentage}</p>
                    </div>
                    <div className="w-full my-auto">
                        <div className="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700">
                            <div
                                className="bg-teal-500 rounded h-1.5"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </Tooltip>
    );
};

export default IndicatorScore;
