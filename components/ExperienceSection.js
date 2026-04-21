import React from 'react'
import { experiences } from './Assets'

const ExperienceSection = () => {
  return (

    <main className='w-10/12 mx-auto py-10'>

      <h2 className='text-4xl md:text-5xl font-semibold font-serif pt-20'>The Experience</h2>

      <section className='flex items-center justify-center flex-wrap gap-x-20 gap-y-2 py-10'>

        {experiences.map(exp => {
          return <div key={exp.title} className='flex flex-col gap-3 items-center justify-center w-55 h-60 px-4 bg-background border border-transparent hover:border-accent transition-all ease-linear duration-500 cursor-pointer'>
            <span>
              {exp.icon}
            </span>
            <h5 className='font-serif text-2xl font-semibold'>{exp.title}</h5>
            <p className='text-center text-sm text-gray-500'>{exp.desc}</p>
          </div>
        })}

      </section>

      <div className='flex items-center justify-center my-7'>
        <span className='text-3xl font-serif text-center italic bg-background px-7 py-12 border-b border-accent'>
          <span className='text-accent font-bold'>"</span> Fragrance is the unseen, unforgettable, ultimate accessory of fashion— it heralds your arrival and prolongs your departure.<span className='text-accent font-bold'>"</span>
        </span>
      </div>

    </main>

  )
}

export default ExperienceSection
