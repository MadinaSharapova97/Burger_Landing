'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';


//
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1324 },
//     items: 4,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   tablet: {
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 764, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PopularBurger = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
      <h1 className='heading'>
        Our Popular <span className='text-red-600'>Burgers</span>
      </h1>
      <div className='w-[80%] mt-[4rem] mx-auto '>
        {/* <BurgerCard
          title='Beefy Bite'
          image='/images/b1.png'
          reviews='6'
          price='10.88$'

        />
         <BurgerCard
          title='Beefy Bite'
          image='/images/b2.png'
          reviews='6'
          price='10.88$'

        /> */}

        <Carousel responsive={responsive}>
          <BurgerCard
            title='Beefy Bite'
            image='/images/b1.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b2.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b3.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b4.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b5.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b6.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b7.png'
            reviews='6'
            price='10.88$'
          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b8.png'
            reviews='6'
            price='10.88$'

          />
          <BurgerCard
            title='Beefy Bite'
            image='/images/b9.png'
            reviews='6'
            price='10.88$'

          />
        </Carousel>;

      </div>
    </div>
  )
}

export default PopularBurger