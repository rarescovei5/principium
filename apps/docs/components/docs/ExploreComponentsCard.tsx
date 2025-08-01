import {
    Button,
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@principium/react';
  import Link from 'next/link';
  
  const ExploreComponentsCard = () => {
    return (
      <Card className="bg-background-50">
        <CardHeader className='flex-col gap-3'>
          <CardTitle className="text-lg">Explore Components</CardTitle>
          <CardDescription>
           Jump from the base components to the more advanced ones, made entirely with Principium UI.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="flat" color="primary" asChild>
            <Link href="/components">Start Exploring</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default ExploreComponentsCard;
  