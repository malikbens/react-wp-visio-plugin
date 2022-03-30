import useEffect from 'react'
import devices from '/data/devices.json'

const [brand, setBrand] = useState([])

useEffect(() => {
    const getBrand = async () => {
        const brandFromServer = await fetchBrand()
        setBrand(brandFromServer)
    }
    getBrand()
}, [])

const fetchBrand = async () => {
    const res = await fetch('http://localhost:3000/devices?name=' + props.values.device)
    const data = await res.json()

    return data
    console.log(data)
}

const fetchBrand = (props) => {
}