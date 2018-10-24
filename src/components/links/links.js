import React from 'react';
import Link from './link';

export default function Links({ links }) {
    return (
        <div>
            {links.map((link, index) => (
                <Link key={link.title} link={link} />
            ))}
        </div>
    );
}
