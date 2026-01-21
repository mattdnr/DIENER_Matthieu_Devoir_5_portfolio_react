import { useEffect } from 'react';

export default function NoIndex({ follow = false }) {
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = follow ? "noindex, follow" : "noindex, nofollow";
        document.head.appendChild(meta);

        return () => {
            document.head.removeChild(meta);
        };
    }, [follow]);

    return null;
}