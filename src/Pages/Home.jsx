import { useEffect, useState } from 'react';
import Button from '../Components/Button/Button';
import { FormatTime } from '../Utils/FormatTime';
import { VscDebugStart } from 'react-icons/vsc'
import { RxLinkBreak1, RxPause, RxReset, } from 'react-icons/rx'
const Home = () => {
    const [time, setTime] = useState(25 * 60);
    const [breakTime, setBreakTime] = useState(5 * 60);
    const [isActive, setIsActive] = useState(false);
    const [label, setLabel] = useState('Work')
    useEffect(() => {
        let interval;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        }
        else if (isActive && time === 0) {
            clearInterval(interval);
            setTime(breakTime);
            setLabel('Break')
        }
        else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, time, breakTime]);


    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(25 * 60);
        setLabel('Work')
    };

    const startBreak = () => {
        setIsActive(true);
        setTime(breakTime);
        setLabel('Break')
    };

    return (
        <div className="mt-36 flex flex-col justify-center items-center gap-5 px-10">
            <h1 className='text-purple-600 text-3xl font-bold'>{label}</h1>

            <h2 className='text-7xl font-bold '>{FormatTime(time)}</h2>
            <div className=" flex justify-center items-center gap-2 my-5 px-10">
                {
                    isActive ?
                        <Button
                            btnText='Pause'
                            handleOnClick={toggleTimer}
                            btnIcon={<RxPause />}
                        />
                        :
                        <Button
                            btnText='Start'
                            btnIcon={<VscDebugStart />}
                            handleOnClick={toggleTimer}
                        />
                }
                <Button
                    btnText='Reset'
                    btnIcon={<RxReset />}
                    handleOnClick={resetTimer}
                />
                <Button
                    btnText='Break'
                    btnIcon={<RxLinkBreak1 />}
                    handleOnClick={startBreak}
                />
            </div>
        </div>
    );
};

export default Home;
