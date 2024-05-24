"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function SortBy() {
  const [showLowtoHigh, setLowtoHigh] = React.useState<Checked>(true)
  const [showHightoLow, setHightoLow] = React.useState<Checked>(false)
  const [showMostRecent, setMostRecent] = React.useState<Checked>(false)
  const [showNone, setNone] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">&gt;</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showLowtoHigh}
          onCheckedChange={setLowtoHigh}
        >
          Price: Low to High
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showHightoLow}
          onCheckedChange={setHightoLow}
          disabled
        >
          Price: High to Low
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showMostRecent}
          onCheckedChange={setMostRecent}
        >
          Most recent
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showNone}
          onCheckedChange={setNone}
        >
          None
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
