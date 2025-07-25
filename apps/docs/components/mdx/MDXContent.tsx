'use client';

import {useMDXComponent} from 'next-contentlayer2/hooks';

import MDXComponents from './MDXComponents';

interface MDXContentProps {
  code: string;
}

export function MDXContent({code}: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={MDXComponents} />;
}
