import { useEffect, useState } from "react";



export const ClocEffect = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('Clock')

      const intervalId = setInterval(() => {
       console.log('Updating date...')

       setDate(new Date())  
      }, 1000)     

      return () => {
        console.log('Clearing clock interval')

        clearInterval(intervalId)
      }
    }, [])

      return (
        <div>
            <p>Current time: {date.toLocaleTimeString()}</p>
        </div>
      )
}