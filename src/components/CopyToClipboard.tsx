import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { Copy, CheckCircle } from '@phosphor-icons/react'

interface CopyToClipboardProps {
  content: string
}

let copiedTimeout: any

export function CopyToClipboard({ content }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    return () => {
      clearTimeout(copiedTimeout)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content)

      setCopied(true)

      copiedTimeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button
      type="button"
      className={clsx(
        'w-8 h-8 rounded-lg text-zinc-400 border border-zinc-700 flex items-center justify-center hover:text-zinc-100 hover:bg-zinc-700 transition-colors',
        copied && 'border-green-500 hover:bg-green-950',
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <CheckCircle className="text-green-500" weight="fill" size={18} />
      ) : (
        <Copy />
      )}
    </button>
  )
}
