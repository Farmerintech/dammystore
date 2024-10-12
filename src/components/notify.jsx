import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./productContext";

export const Notify = () => {
    const { state } = useContext(ProductContext);
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(100); // Progress starts at 100%

    useEffect(() => {
        if (state.notify.message !== '') {
            setVisible(true);
            setProgress(100); // Reset progress to 100% when a new message is shown

            const interval = setInterval(() => {
                setProgress((prev) => Math.max(prev - 5, 0)); // Decrease progress by 5 every 100ms
            }, 100);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 2000); // Hide notification after 2 seconds

            // Cleanup both the timer and interval on unmount or new message
            return () => {
                clearTimeout(timer);
                clearInterval(interval);
            };
        }
    }, [state.notify.message]);

    return (
        <>
            {visible && (
                <div
                    className={`z-40 fixed w-full flex justify-center mt-5 text-black items-center top-10 p-3 bg-white shadow-md`}
                >
                    <p className="text-black">{state.notify.message}</p>
                    <div
                        className="absolute bottom-0 left-0 h-1 bg-blue-400 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </>
    );
};
