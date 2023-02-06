import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (APIurl) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const response = await axios(APIurl);
            setProducts(response.data);
        }
        loadData()
    }, [])
    return products
}

export default useGetProducts