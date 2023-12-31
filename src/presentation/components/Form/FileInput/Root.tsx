'use client'

import { ComponentProps, createContext, useContext, useId } from 'react'

type RootProps = ComponentProps<'div'>

interface FileInputContextType {
  id: string
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
