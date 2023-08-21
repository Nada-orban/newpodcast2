import { products } from '../../../../data'

export default function handler(req, res) {
    let id = req.query.id;

    let product = products.find((p) => p.id == id)
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(400).json({ err: 'there is no product' })
    }

}
