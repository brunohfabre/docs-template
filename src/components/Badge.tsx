import clsx from 'clsx'

interface BadgeProps {
  method: string
}

export function Badge({ method }: BadgeProps) {
  return (
    <div
      className={clsx(
        'flex px-1 rounded',
        method === 'get' && 'bg-green-100',
        method === 'post' && 'bg-blue-100',
        method === 'put' && 'bg-yellow-100',
        method === 'patch' && 'bg-orange-100',
        method === 'delete' && 'bg-red-100',
      )}
    >
      <span
        className={clsx(
          'text-[10px] font-semibold',
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
