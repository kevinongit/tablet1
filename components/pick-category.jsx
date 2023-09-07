
import { FishIcon, PlaneIcon, BusIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from "next/image";


export function PickCategory({ dispatch }) {
  function showImage({ src, width, height }) {
    return (
      <Image
        src={src}
        alt="img"
        width={width || 400}
        height={height || 600}
      />
    )
  }
  return (
    <Card>
      <CardHeader className='pb-3'>
        <CardTitle> Choose a Category </CardTitle>
        <CardDescription>
          Choose what you want to..
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-1'>
        <div
          className='flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md hover:bg-accent hover:text-accent-foreground'
          onClick={
            () => dispatch({
              type: 'CHANGE_CURRENT_CHILDNODE',
              payload: {
                title: 'SEA',
                childNode: showImage({
                  src: "https://source.unsplash.com/featured?sea,beach,swim",
                  // src: "https://source.unsplash.com/featured?sea,beach,swim%20w=300&dpr=2&q=80",
                })
              }
            })
          }
        >
          <FishIcon className="w-5 h-5 mt-px" />
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Sea</p>
            <p className="text-sm text-muted-foreground">
              This is the day you will always remember as the day you almost caght Captain Jack Sparrow.
            </p>
          </div>
        </div>
        <div
          className='flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md hover:bg-accent hover:text-accent-foreground'
          onClick={
            () => dispatch({
              type: 'CHANGE_CURRENT_CHILDNODE',
              payload: {
                title: 'SKY',
                childNode: showImage({
                  src: "https://source.unsplash.com/featured?sky,air,wind%20w=300&dpr=2&q=80",
                })
              }
            })
          }
        >
          <PlaneIcon className="w-5 h-5 mt-px" />
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Sky</p>
            <p className="text-sm text-muted-foreground">
              A couldless plain blue sky is a flowerless garden.
            </p>
          </div>
        </div>
        <div
          className='flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md hover:bg-accent hover:text-accent-foreground'
          onClick={
            () => dispatch({
              type: 'CHANGE_CURRENT_CHILDNODE',
              payload: {
                title: 'TRAVEL',
                childNode: showImage({
                  src: "https://source.unsplash.com/featured?tour,travel,world%20w=300&dpr=2&q=80",
                })
              }
            })
          }
        >
          <BusIcon className="w-5 h-5 mt-px" />
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Travel</p>
            <p className="text-sm text-muted-foreground">
              Jobs fill your pocket, but adventures fill your soul.
            </p>
          </div>
        </div>
      </CardContent>
    </Card >
  )
}