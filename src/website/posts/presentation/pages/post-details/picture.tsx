import { Clock, BarChart2 } from 'lucide-react'

import Image from 'next/image'

interface PictureProps {
  imgUrl: string
  categories: string[]
  title: string
  author: string
}

export function Picture({ imgUrl, categories, title, author }: PictureProps) {
  return (
    <div className="relative z-10 flex h-[28rem] w-full rounded-sm border-0 border-zinc-300 bg-zinc-400 shadow-sm lg:border">
      <Image
        src={imgUrl}
        fill={true}
        alt="Post image"
        className="object-cover object-center"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-black bg-opacity-20 px-3 py-7">
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <div
              className="z-9 h-fit cursor-pointer rounded-sm bg-zinc-50 bg-opacity-20 px-3 py-1 transition duration-150 ease-in-out hover:scale-105 hover:bg-opacity-10"
              key={category}
            >
              <span className="text-zinc-50">{category}</span>
            </div>
          ))}
        </div>

        <div className="px-3">
          <h1 className="text-xl font-medium text-zinc-50 lg:text-3xl">
            {title.toUpperCase()}
          </h1>
          <h2 className="mb-2 mt-4 text-xl font-medium text-zinc-100">
            Some subtile optional you want to put
          </h2>
          <div className="flex items-center gap-2 text-sm font-light text-zinc-100">
            <span>por {author}</span>
            <span>—</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />2 minutos de leitura
            </span>
            <span>—</span>
            <span className="flex items-center gap-1">
              <BarChart2 className="h-4 w-4" />
              32mil visualizações
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}