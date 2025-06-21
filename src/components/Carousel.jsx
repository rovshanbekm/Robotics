import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[330px] ml- sm:w-[500px] sm:ml-13 md:w-[700px] md:ml-9 lg:w-[900px] xl:w-[1200px] xl:ml-8 max-w-7xl"
    >
      <CarouselContent className='mt-5'>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-3/6 sm:basis-1/5 md:basis-2/6 lg:basis-2/6 xl:basis-1/5 ">
            <div className="p-1 ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 ">
                  <span className="text-3xl font-semibold ">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

