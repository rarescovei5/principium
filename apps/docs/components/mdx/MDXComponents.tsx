import React from 'react';
import Community from '../marketing/Community';
import Overview from '@/content/components/overview';
import * as PrincipiumComponents from '@principium/react';
import Image from 'next/image';
import ComponentLinks from '../docs/ComponentLinks';
import PackageManagers from '../docs/PackageManagers';

export interface LinkedHeadingProps {
  as: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const LinkedHeading = ({children, as}: LinkedHeadingProps) => {
  const Comp = as;

  const slug = children!
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .replace(/\s+/g, '-'); // replace spaces with dashes

  const id = encodeURIComponent(slug);

  return (
    <Comp id={id}>
      {children}
    </Comp>
  );
};

const MDXComponents = {
  ...PrincipiumComponents,
  ...Overview,
  NextImage: Image,
  Community,
  ComponentLinks,
  PackageManagers,
  // Primitives
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h1" />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h2" />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h3" />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h4" />,
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => <PrincipiumComponents.Divider {...props} className="not-prose my-6"/>
};

export default MDXComponents;
