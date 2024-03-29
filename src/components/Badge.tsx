import clsx from 'clsx'

interface BadgeProps {
  method: string
  size?: 'sm' | 'md'
}

export function Badge({ method, size }: BadgeProps) {
  return (
    <div
      className={clsx(
        'flex px-1 rounded',
        size === 'md' && 'px-[6px] py-[2px]',
        method === 'get' && 'bg-green-100',
        method === 'post' && 'bg-blue-100',
        method === 'put' && 'bg-yellow-100',
        method === 'patch' && 'bg-orange-100',
        method === 'delete' && 'bg-red-100',
      )}
    >
      <span
        className={clsx(
          'font-semibold text-[10px]',
          size === 'md' && 'text-xs',
          method === 'get' && 'text-green-500',
          method === 'post' && 'text-blue-500',
          method === 'put' && 'text-yellow-500',
          method === 'patch' && 'text-orange-500',
          method === 'delete' && 'text-red-500',
        )}
      >
        {method === 'get' && 'GET'}
        {method === 'post' && 'POST'}
        {method === 'put' && 'PUT'}
        {method === 'patch' && 'PTCH'}
        {method === 'delete' && 'DEL'}
      </span>
    </div>
  )
}
