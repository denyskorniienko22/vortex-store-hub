import { cn } from "@/lib/utils"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface IFilterCheckboxProps {
  id: string
  label: string
  checked: boolean
  suffix?: string
  onToggle: () => void
}

const FilterCheckbox = ({
  id,
  checked,
  label,
  suffix,
  onToggle,
}: IFilterCheckboxProps) => {
  return (
    <div className={cn("flex items-center space-x-3", "group")}>
      <Checkbox id={id} checked={checked} onCheckedChange={onToggle} />
      <Label
        htmlFor={id}
        className={cn(
          "text-sm font-medium leading-none",
          "cursor-pointer",
          "transition-colors",
          "group-hover:text-primary",
        )}
      >
        {label}
        {suffix}
      </Label>
    </div>
  )
}

export default FilterCheckbox
