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

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Sizes</SelectLabel>
          <SelectItem value="apple">M</SelectItem>
          <SelectItem value="banana">SM</SelectItem>
          <SelectItem value="blueberry">L</SelectItem>
          <SelectItem value="grapes">XL</SelectItem>
          <SelectItem value="pineapple">XXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
