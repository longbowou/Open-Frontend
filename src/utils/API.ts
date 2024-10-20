import axios from 'axios';

const genericErrorMessage = 'Oops, something went wrong. We are actively working to resolve the issue. Please try again later. Thanks!'

const uploadImageToS3 = async (uploadURL: string, file: File) => {
  await axios.put(uploadURL, file, {
    headers: { 'Content-Type': file.type }
  });
};

export { uploadImageToS3, genericErrorMessage };