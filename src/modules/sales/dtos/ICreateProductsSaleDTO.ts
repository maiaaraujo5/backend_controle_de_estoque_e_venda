export default interface ICreateProductsSaleDTO {
    product_variation_id: string
    sale_id: string
    price: number
    quantity: number
    status: 'SOLD' | 'RESERVED' | 'REFUNDED'
}
