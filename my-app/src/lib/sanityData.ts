import {client} from "@/sanity/lib/client"
export async function fetchSanityData(){
    try{
        const query =  `*[_type == "shoe" && category == "Women's Shoes" ]{
            name,_id,description,inventory,category,price,"image":image.asset->url,status
           }`
        const products = await client.fetch(query)
        if (!products || products.length === 0) {
            throw new Error('No products found')
    }
    return { data: products }
   
}

    catch(error){
        console.error("Error fetching products:", error)
    return { error: 'Failed to fetch products' }
    }
}