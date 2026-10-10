import { ImageKit } from "@imagekit/nodejs/client.js";


const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});







export default imagekit