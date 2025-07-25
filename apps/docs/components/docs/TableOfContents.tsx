'use client';

import {Heading} from '@/lib/getHeadings';
import React from 'react';

const TableOfContents = ({headings}: {headings: Heading[]}) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const tocRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (tocRef.current) {
      const {scrollTop} = tocRef.current;
      tocRef.current.setAttribute('data-top-fade', scrollTop > 10 ? 'true' : 'false');
    }
  }, []);

  return headings.length > 0 && (
    <div
      className="group max-h-100 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onScroll={handleScroll}
      ref={tocRef}
      data-top-fade={false}
    >
      <h2 className="text-background-800 mb-4 text-base font-medium">On this page</h2>
      <ul className="flex flex-col gap-2 mb-10">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className="text-background-600 data-[active=true]:text-background-950 text-sm"
            style={{marginLeft: `${(heading.level - 2) * 16}px`}}
            data-active={activeId === heading.id}
            onClick={() => setActiveId(heading.id)}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
      <div
        className={`from-background-50 absolute left-0 top-0 z-10 h-10 w-full bg-gradient-to-b to-transparent transition-opacity duration-100 group-data-[top-fade=false]:opacity-0 group-data-[top-fade=true]:opacity-100`}
      />
      <div className="from-background-50 absolute bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
};

export default TableOfContents;
