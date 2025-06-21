import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[139px] h-[45px] rounded-[25px] border-[1px] border-[#F0D625] text-[#F0D625] cursor-pointer">
        <SelectValue className=" font-normal text-2xl leading-[100%] " placeholder="Курсы" />
      </SelectTrigger>
      <SelectContent className='border-[#F0D625] bg-black'>
        <SelectGroup>
          <SelectItem className='font-normal text-2xl leading-[100%] text-[#F0D625] border-[#F0D625] cursor-pointer' value="1">робототехника</SelectItem>
          <SelectItem className='font-normal text-2xl leading-[100%] text-[#F0D625] border-[#F0D625] cursor-pointer' value="2">Английский</SelectItem>
          <SelectItem className='font-normal text-2xl leading-[100%] text-[#F0D625] border-[#F0D625] cursor-pointer' value="3">Живопись для детей</SelectItem>
          <SelectItem className='font-normal text-2xl leading-[100%] text-[#F0D625] border-[#F0D625] cursor-pointer' value="4">Живопись для взрослых</SelectItem>
          </SelectGroup>
      </SelectContent>
    </Select>
  )
}
