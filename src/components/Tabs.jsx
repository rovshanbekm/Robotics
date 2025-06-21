import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div>
      <Tabs className='w-[164px] h-[52px] lg:ml-[30px] '>
        <TabsList className='bg-black w-[95px] h-[48px] lg:bg-black lg:w-[85px] lg:h-[42px]' >
          <TabsTrigger className='text-white' value="account">RU</TabsTrigger>
          <TabsTrigger className='text-white' value="password">UZ</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
