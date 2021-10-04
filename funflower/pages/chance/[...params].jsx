import React from 'react'
import { useRouter } from "next/router";

const MultipleChances = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(`🚀`, params)

    return <div>Chance with ID: {id}</div>
}

export default MultipleChances

