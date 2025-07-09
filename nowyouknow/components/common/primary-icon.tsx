import { IconContext } from "react-icons";

// add children to primaryIcons without this it causes an error
interface PrimaryIconProps {
    children: React.ReactNode;
}


export function PrimaryIcon({ children }: PrimaryIconProps) {
    return (
        <IconContext.Provider value={{ size: '20px', className: 'text-white' }}>
            <div className=' bg-teal-500 w-fit rounded p-1.5'>

                <div>{children}</div>
            </div>
        </IconContext.Provider>
    );
}