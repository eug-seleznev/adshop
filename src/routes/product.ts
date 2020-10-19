import { Router } from "express"
import { getProduct, addProduct } from "../controllers/product"

const router: Router = Router()


// @product

router.get("/", getProduct)
router.post("/", addProduct)


export default router