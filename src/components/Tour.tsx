import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PanoViewer } from '@egjs/view360'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'

export interface TourProps {

}

const PanViewer = styled.div`
    height: 100vh;
    position: relative;
`

const Tour: React.FC<TourProps> = () => {
  const initTour = (): void => {
    // create PanoViewer with option
    const target: HTMLElement | null = document.getElementById('myPanoViewer')
    if (target !== null) {
      const targetElement: HTMLElement = target
      const panoViewer = new PanoViewer(
        targetElement,
        {
        //   image: '/360/test/1.jpg',
          image: image1,
          width: 300,
          height: 300,
          gyroMode: 'yawPitch'
        }
      )
    }
  }

  useEffect(() => {
    initTour()
  }, [])

  return (
    <div>
      <PanViewer id='myPanoViewer' />
    </div>
  )
}

export default Tour
