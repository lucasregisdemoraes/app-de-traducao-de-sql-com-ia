'use client'

import { Logo } from '../../public/logo'
import { Trash2, Stars } from 'lucide-react'

import { useCompletion } from 'ai/react'
import { useState } from 'react'

import Editor from 'react-simple-code-editor'

import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-dark.css'

export default function Home() {
  const [schema, setSchema] = useState('')

  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: 'api/generate-sql',
    body: {
      schema
    }
  })

  const result = completion

  return (
    <div className='max-w-[430px] mx-auto pt-16 pb-4 px-6'>
      <header className='flex items-center justify-between'>
        <Logo />
        <button className='hover:opacity-70 transition-opacity duration-500' title='Apagar' type='button'>
          <Trash2 className='h-8 w-8 text-snow' strokeWidth={0.8} />
        </button>
      </header>
      <form onSubmit={handleSubmit} className='py-8 w-full flex flex-col text-foam'>
        <div>
          <label htmlFor="schema">Cole seu código SQL aqui</label>
          <Editor
            textareaId="schema"
            className='!px-4 !py-3 !overflow-scroll font-mono my-6 h-40 bg-lime-500/5 border border-guava/20 rounded-md focus-within:ring-1 focus-within:ring-lime-600'
            textareaClassName='!px-4 !py-3 outline-none'
            value={schema}
            onValueChange={schema => setSchema(schema)}
            highlight={schema => highlight(schema, languages.sql, 'sql')}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor="question">Faça uma pergunta sobre o código</label>
          <textarea
            className='w-full my-6 bg-lime-500/5 w-100 border border-guava/20 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600'
            name="question"
            id="question"
            value={input}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className='px-2 py-3 text-pistachio border-pistachio border rounded-md min-h-14 flex justify-center items-center gap-2 font-semibold hover:opacity-70 transition-opacity duration-500'>
          <Stars className='w-6 h-6' />
          Perguntar à inteligência artificial
        </button>
      </form>
      <div className='mt-2'>
        <span className='text-foam'>Resposta</span>
        <Editor
          readOnly
          textareaId="schema"
          className='text-foam !px-4 !py-3 !overflow-scroll font-mono my-4 h-40 bg-lime-500/5 border border-guava/20 rounded-md focus-within:ring-1 focus-within:ring-lime-600'
          textareaClassName='!px-4 !py-3 outline-none'
          value={result}
          onValueChange={schema => setSchema(schema)}
          highlight={schema => highlight(schema, languages.sql, 'sql')}
        />
      </div>
    </div>
  )
}