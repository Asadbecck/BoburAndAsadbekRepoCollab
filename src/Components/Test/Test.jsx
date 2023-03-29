import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Test() {
    const [titleName, setTItleName] = useState()

    const handClick = () => {
        axios.get("http://localhost:3004/posts")
            .then((res) => {
            setTItleName(res)
            })
    }
    console.log(titleName);

    useEffect(() => {
       handClick()
      }, []);

    console.log(titleName);

    return (
        <>


        </>
    )
}
