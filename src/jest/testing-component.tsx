import { useState } from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default function TestingComponent({ id, page, children }: { id: string, page: string, children: React.ReactNode }) {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a
            id={id}
            className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
}