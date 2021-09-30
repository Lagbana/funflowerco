import React from 'react'
import { useRouter } from "next/router";

const AdminProfile = () => {
    const router = useRouter()

    const { id } = router.query

    return <div>Admin with ID: {id}</div>

}

export default AdminProfile

