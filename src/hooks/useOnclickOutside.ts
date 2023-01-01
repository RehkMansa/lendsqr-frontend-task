import { useEffect, useRef } from "react";

const useOnClickOutside = <T extends HTMLElement>(
    handler: (e: MouseEvent | TouchEvent) => void
) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                !(event.target instanceof Node) ||
                !ref.current ||
                ref.current.contains(event.target)
            ) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener); // to support touch events for mobile and desktop
            document.removeEventListener("touchstart", listener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]); // handler function might not be wrapped in a callback

    return ref;
};

export default useOnClickOutside;

// for better explanation check: https://www.robinwieruch.de/react-hook-detect-click-outside-component/
