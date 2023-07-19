import { ItemType } from '.'

interface ItemProps {
  item: ItemType
}

export function Item({ item }: ItemProps) {
  return (
    <div className="flex flex-col py-2">
      <div className="flex gap-3">
        <span className="font-medium text-zinc-900">{item.name}</span>
        {item.required && <span className="text-zinc-500">required</span>}
      </div>

      <div className="text-sm text-zinc-500">
        <span>type: </span>
        <span>{item.type}</span>
      </div>
    </div>
  )
}
