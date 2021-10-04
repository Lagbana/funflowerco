import React from 'react'
import Link from 'next/link'

const ChancePage = () => (
    <div>
        <h1>Chance 🎲</h1>
        <Link href={"../jail"}>
            <a>
                Go to jail and do not pass go 😭
            </a>
        </Link>
    </div>
)

export default ChancePage