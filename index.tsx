import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const s3 = require('aws-cdk-lib/aws-s3');

new s3.Bucket(this, 'id', {
    bucketName: 'bucket'
}); // Sensitive

const s32 = require('aws-cdk-lib/aws-s3');

new s32.Bucket(this, 'id', {
    bucketName: 'bucket'
}); // Sensitive

root.render(
    <StrictMode>
        <App />
    </StrictMode>);
