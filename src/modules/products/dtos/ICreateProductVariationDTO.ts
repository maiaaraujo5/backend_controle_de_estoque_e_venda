export default interface ICreateProductDTO {
    productId: string,
    variations: variation[]

}

interface variation {
    variation_id: string,
    variation_value: string,
    quantity: number,
    price: number,
}
