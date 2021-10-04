import React from 'react'
import Link from 'next/link'

const JailPage = () =>(
    <div>
        <h1>Welcome to jail 😱</h1>
        <Link href={"../railroad"}>
            <a>
                Get free 🕊
            </a>
        </Link>
    </div>
)

export default JailPage