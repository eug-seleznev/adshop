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
      const body = req.body as Pick<ProductInterface, "title" | "about" | "price" | "quantity">
  
      const product: ProductInterface = new Product({
        title: body.title,
        about: body.about,
        price: body.price,
        quantity: body.quantity
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



  export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {

    const updateProd: ProductInterface | null = await Product.findOneAndUpdate({title: req.body.title}, req.body)
    const allProducts: ProductInterface[] = await Product.find();


    res.json({
      message: 'Product updated',
      product: updateProd,
      products: allProducts
    })


    } catch (error) {
      throw error
    }
  }



export const getProductByTitle = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: ProductInterface | null = await Product.findOne({title: req.params.id});
    res.json({
      message: "Product",
      product: product
    })
  } catch (error) {
    throw error
  }
}


export const  buyProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: ProductInterface | null = await Product.findOneAndUpdate({title: req.params.id}, {$inc: {quantity: -1}} ) 

    const updateProd: ProductInterface | null = await Product.findOne({title: req.params.id})

    res.json({
      message: "success buy",
      product: updateProd
    })
  } catch (error) {
    throw error
  }
}








