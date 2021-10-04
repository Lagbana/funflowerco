import React from 'react'
import { useRouter } from "next/router";

const ShortlineRail = () => {
    const router = useRouter()
    const { id } = router.query

    return <div>Rail ID: {id}</div>
}

export default ShortlineRail