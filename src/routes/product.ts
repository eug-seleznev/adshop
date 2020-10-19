import { Router } from "express"
import { getProduct, addProduct, updateProduct } from "../controllers/product"

const router: Router = Router()


// @product

router.get("/", getProduct)
router.post("/", addProduct)
router.put('/:id', updateProduct)


export default router