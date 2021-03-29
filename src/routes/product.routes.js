import { Router } from 'express'
const router = Router();
import * as productsCrtl from '../controllers/product.controllers';
import { authJwt } from '../middleware'


router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCrtl.createProduct);


router.get('/', productsCrtl.getProducts);
router.get('/:productId', productsCrtl.getProductById);

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCrtl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCrtl.DeleteProductById);

export default router;