import React from 'react'
import { useRouter } from "next/router";

const JailProfile = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1> Jail with ID: {id}</h1>
        </div>
    )
}

export default JailProfile

