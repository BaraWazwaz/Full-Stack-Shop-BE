import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    '*'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    framework: "TypeScript Express"
  });
});

app.listen(port, () => {
  console.log(`Backend listening internally on port ${port}`);
});
