import React from 'react'

const CardUI = ({ product }) => {
    return (
        <div className='w-75 h-100 relative group overflow-hidden'>
            <div>
                <img src={product.image} alt={product.name} className='w-75 h-100 object-cover group-hover:brightness-50 transition-all ease-linear duration-500' />
            </div>
            <div className={`absolute top-2 left-2 border-2 px-3 py-1 ${product.gender === 'Men' ? 'bg-blue-950/20 text-sm text-blue-950 border-blue-950/50' : 'bg-pink-950/20 text-sm text-pink-950 border-pink-950/50'}`}>
                {product.gender}
            </div>
            <div className='flex flex-col gap-1 bg-black/50 backdrop-blur-lg rounded-t-3xl w-full min-h-fit p-3 absolute -bottom-23 group-hover:bottom-0 transition-all ease-linear duration-500 cursor-pointer'>
                <div className='flex items-center justify-between py-3'>
                    <h3 title={product.name} className='font-serif text-2xl font-semibold truncate max-w-[60%]'>{product.name}</h3>
                    <span className='text-red-500'> <span className='text-xs font-bold'>PKR</span> {product.price}</span>
                </div>
                <h4>{product.type}</h4>
                <h5 className='text-sm'>By <span className='font-serif text-lg'>{product.brand}</span></h5>

                <div className='flex items-center justify-between'>
                    <h5>{product.size}</h5>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardUI
