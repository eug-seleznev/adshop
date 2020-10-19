import { Response, Request } from "express"
import { ProductInterface } from "../models/product"
import Product from "../models/product"

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: ProductInterface[] = await Product.find()
    res.status(200).json({ product })
  } catch (error) {
    throw error
  }
}



export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<ProductInterface, "title" | "about">
  
      const product: ProductInterface = new Product({
        title: body.title,
        about: body.about
      })
  
      const newProduct: ProductInterface = await product.save()
      const allProducts: ProductInterface[] = await Product.find()
  
      res
        .status(201)
        .json({ message: "Product added", prodcut: newProduct, products: allProducts })
    } catch (error) {
      throw error
    }
  }