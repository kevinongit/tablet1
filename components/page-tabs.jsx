import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import { PlusCircleIcon, XIcon } from 'lucide-react'
import { Separator } from './ui/separator'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

import { MAX_TABS } from '@/config/constants'

import { useNavigate, useParams } from 'react-router-dom'
export function PageTabs({ tabs, currentTabIdx, dispatch }) {
  const navigate = useNavigate()
  const { index = 0 } = useParams()

  function onAddButtonClick() {
    if (tabs.length >= MAX_TABS) {
      alert(`tabs are allowed up to ${MAX_TABS}`)
      return
    }
    dispatch({ type: 'ADD_TAB', payload: undefined })
    navigate(`/${currentTabIdx + 1}`)
  }

  console.log({ index, navigate })

  return (
    <div className="hidden md:block">
      <div className='border-t'>
        <div className='bg-background'>
          <div className='grid lg:grid-cols-5'>
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue={0} value={currentTabIdx} onValueChange={str => { console.log('onVal : ' + str); dispatch({ type: 'SET_CURRENT_TAB_IDX', payload: str }) }} className='h-full space-y-6'>
                  <div className='flex items-center space-between'>
                    <TabsList className='justify-start'>
                      {
                        tabs.map((tab, index) => (
                          <TabsTrigger
                            value={index}
                            key={tab.id}
                            className='relative w-28'
                          >
                            {tab.title}
                            {!!index && <XIcon
                              onClick={() => {
                                dispatch({ type: 'DELETE_TAB', payload: tab.id })
                              }}
                              size={12}
                              className='absolute right-1'
                            />}
                          </TabsTrigger>
                        ))
                      }
                    </TabsList>
                    <div className='ml-auto mr-4'>
                      <Button onClick={onAddButtonClick} disabled={tabs.length === MAX_TABS} className='bg-gray-600'>
                        <PlusCircleIcon className='w-4 h-4' />
                      </Button>
                    </div>
                  </div>
                  {
                    tabs.map((tab, index) => (
                      <TabsContent value={index} key={tab.id} className='p-0 border-none outline-none'>
                        {tab.childNode || "Empty" + tab.id}
                      </TabsContent>

                    ))
                  }
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
