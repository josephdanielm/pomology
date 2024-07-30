import coconut from '../assets/fruits/coconut.png'
import shopBag from '../assets/shopping-bag.svg'

export default function ProductCard() {
  return (
    <div className='relative group '>
      <div className=' flex flex-col text-gray-700 bg-clip-border w-full rounded-xl bg-gray-200 p-6 shadow-[inset_-12px_-8px_40px_#46464620]'>
        <img src={coconut} className='max-w-16 self-center py-6' />
        <div className='flex flex-col mx-auto items-center gap-y-4'>
          <h2 className='text-xl font-medium'>Coconut</h2>
          <p className='text-xl font-bold'>3</p>
        </div>
      </div>
      <div className=' group-hover:bg-zinc-500/80 transition-all duration-300 absolute inset-0 bottom-0 flex items-center justify-center text-xl bg-gray-600/0 font-semibold rounded-xl'>
        <button className='w-fit z-10'>
          <svg
            className='hover:scale-125 active:scale-110 transition-all duration-200 ease-in-out fill-zinc-100/0 group-hover:fill-zinc-100/100'
            xmlns='http://www.w3.org/2000/svg'
            height='40px'
            viewBox='0 -960 960 960'
            width='40px'
          >
            <path
              vector-effect='non-scaling-stroke'
              d='M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-506.66q0-27 19.83-46.84Q199.67-720 226.67-720h100v-6.67q0-64 44.66-108.66Q416-880 480-880t108.67 44.67q44.66 44.66 44.66 108.66v6.67h100q27 0 46.84 19.83Q800-680.33 800-653.33v506.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-506.66h-100v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66H393.33v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66h-100v506.66ZM393.33-720h173.34v-6.67q0-36.33-25.17-61.5-25.17-25.16-61.5-25.16t-61.5 25.16q-25.17 25.17-25.17 61.5v6.67ZM226.67-146.67v-506.66 506.66Z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
