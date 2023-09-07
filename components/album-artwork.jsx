import Image from 'next/image'
import { cn } from '@/lib/utils'
import { PlusCircleIcon, BoxIcon } from 'lucide-react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export function AlbumArtwork({
  album,
  aspectRatio,
  width,
  height,
  className,
  ...props
}) {

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className='overflow-hidden rounded-md'>
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                'h-auto w-auto object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className='w-40'>
          <ContextMenuItem> First Item </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuItem>
                <PlusCircleIcon className='w-4 h-4 mr-2' />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {['90년대 인기가요', 'Old Pops', 'TikTok 인기'].map(p => {
                <ContextMenuItem key={p}>
                  <BoxIcon />
                  {p}
                </ContextMenuItem>
              })}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Play Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className='space-y-1 text-sm'>
        <h3 className='font-medium leading-none'>{album.name}</h3>
        <p className='text-xs text-muted-foreground'>{album.artist}</p>
      </div>
    </div>
  )
}
