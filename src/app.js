import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import { createRoles } from './libs/initialSetup';

import productRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/user.routes';

const app = express();
createRoles();

app.set('pkg', pkg)

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use('/api/products',productRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users',authRoutes);

export default app;