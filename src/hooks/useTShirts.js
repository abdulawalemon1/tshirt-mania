import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirt, setTShirts] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => setTShirts(data))
    }, [])
    return [tShirt, setTShirts]
}
export default useTShirts;