import React from 'react'

const ColorChange = () => {

    const [color, setColor] = React.useState('red');

  return (
    <div className=' w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className=' fixed flex justify-center bottom-12 inset-x-0 px-2'>
            <div className=' flex justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button className=' outline-none text-white px-4 py-1 rounded-full shadow-sm' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
                <button className=' outline-none text-white px-4 py-1 rounded-full shadow-sm' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
                <button className=' outline-none text-white px-4 py-1 rounded-full shadow-sm' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>

            </div>
        </div>
    </div>
  )
}

export default ColorChange