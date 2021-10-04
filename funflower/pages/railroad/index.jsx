import React from 'react'
import Link from "next/link";

const RailRoadPage = () => {
    const names = ["Short Line", "B&O", "Reading", "Pennsylvania"]
    const railroads = names.map((name, i) => ({id: i, title: `${name}`}))

    return (
        <div>
            <h1>Railroad 🚂</h1>
            <div>
                <Link href={"../."}>
                    <a> Move to Go and collect $200 🤑 </a>
                </Link>
            </div>
            {
                railroads.map(rail => (
                    <div>
                        <Link key={rail.id} href={"/railroad/[id]"} as={`/railroad/${rail.id}`}>
                            <a>
                                <strong>{rail.title} railroad</strong> 🚋
                            </a>
                        </Link>
                    </div>
                ))
            }

        </div>
    )
}

export default RailRoadPage