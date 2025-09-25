import { useEffect } from "react"

const Page = ({
    children,
    className
}) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div className={`page ${className || ""}`}>
            {children}
        </div>
    )
}

export default Page