import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Typescript = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        fill="#F6FBF4"
        className="max-w-[60%] md:max-w-[80%]"
      >
        <path d="M0 16v16h32V0H0zm25.786-1.276a4.023 4.023 0 0 1 2.005 1.156c.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188l1.188-.688.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854a4.236 4.236 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z"></path>
      </svg>
    </div>
  )
}
