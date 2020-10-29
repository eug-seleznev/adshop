import { Router } from "express"
import { getProduct, addProduct, updateProduct, buyProduct, getProductByTitle } from "../controllers/product"

const router: Router = Router()


// @product

router.get("/", getProduct)
router.post("/", addProduct)
//update by name
router.put('/:id', updateProduct)
//get by title
router.get('/:id', getProductByTitle)

//by product
router.post('/:id', buyProduct)


export default router