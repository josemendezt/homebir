import { useState, useEffect } from 'react'

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    // Limpieza de event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}

export default useDimensions
