import { Router } from 'express'
const router = Router();
import * as productsCrtl from '../controllers/product.controllers';

router.post('/', productsCrtl.createProduct);
router.get('/', productsCrtl.getProducts);
router.get('/:productId', productsCrtl.getProductById);
router.put('/:productId', productsCrtl.updateProductById);
router.delete('/:productId', productsCrtl.DeleteProductById);

export default router;