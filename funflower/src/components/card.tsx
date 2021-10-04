import React from "react"
import classNames from "classnames"

type CardProps = {
    children: any,
    flex?: "column" | "row"
    justify?: "center" | "space-between" | "space-evenly" | "flex-end",
    align?: "center" | "flex-end",
    justifySelf?: "flex-end",
    alignSelf?: "flex-end",
    gap?: "05" | "1" | "2",
    onClick?: (...args: any) => void,
    className?: string,
    key?: string | number,
    wrap?: boolean,
    fitContent?: boolean
    fullHeight?: boolean
}

const Card = ({
                  children,
                  flex,
                  justify,
                  align,
                  justifySelf,
                  alignSelf,
                  gap,
                  onClick,
                  className,
                  key,
                  wrap,
                  fitContent,
                  fullHeight
              }: CardProps) => {

    const classes = classNames(
        "hd-div",
        flex,
        {
            [`justify-${justify}`]: justify,
            [`align-${align}`]: align,
            [`justify-self-${justifySelf}`]: justifySelf,
            [`align-self-${alignSelf}`]: alignSelf,
            [`gap-${gap}`]: gap,
            [`wrap`]: wrap,
            [`fit-content`]: fitContent,
            [`full-height`]: fullHeight
        },
        className
    );

    return (
        <article className="user_review">
            <h4>Love the dinos!</h4>
            <p>I agree, dinos are my favorite.</p>
            <footer>
                <p>
                    Posted on
                    <time dateTime="2015-05-17 19:00">May 17</time>
                    by Tom.
                </p>
            </footer>
        </article>
    )
}

export default Card