import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import healthRoutes from './routes/healthRoutes.js';
import simulatorRoutes from './routes/simulatorRoutes.js';
import crmRoutes from './routes/crmRoutes.js';
import marketplaceRoutes from './routes/marketplaceRoutes.js';
import assistantRoutes from './routes/assistantRoutes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({
    name: "Vieira's Solar Platform API",
    version: '0.1.0',
    modules: ['simulator', 'crm', 'marketplace', 'assistant']
  });
});

app.use('/health', healthRoutes);
app.use('/api/simulator', simulatorRoutes);
app.use('/api/crm', crmRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/assistant', assistantRoutes);

app.listen(env.port, () => {
  console.log(`Backend API running on port ${env.port}`);
});
