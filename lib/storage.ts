import { Storage } from '@google-cloud/storage'

if (
  !process.env.GCS_PROJECT_ID ||
  !process.env.GCS_CLIENT_EMAIL ||
  !process.env.GCS_PRIVATE_KEY ||
  !process.env.GCS_BUCKET_NAME
) {
  throw new Error('Google Cloud Storage credentials are missing in .env.local')
}

// 2. Private Key formatını düzelt (En çok hata alınan yer burasıdır!)
// .env dosyasındaki \n karakterleri bazen string olarak gelir, onları gerçek yeni satıra çeviriyoruz.
const privateKey = process.env.GCS_PRIVATE_KEY.split(String.raw`\n`).join('\n')

// 3. Storage istemcisini başlat
const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: privateKey,
  },
})

const bucketName = process.env.GCS_BUCKET_NAME
const bucket = storage.bucket(bucketName)

export { bucket }
