// DocumentUpload.js
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { StepperContext } from './StepperContext';
import { uploadPostImage } from '../../Services/post-service';
import { toast } from 'react-toastify';

const DocumentUpload = () => {
  const { image, setImage, post } = useContext(StepperContext);

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    if (image) {
      uploadPostImage(image, post.id)
        .then((data) => {
          toast.success('Image uploaded successfully!');
          // You might want to update the post state or take other actions after successful upload
        })
        .catch((error) => {
          toast.error('Error uploading image');
          console.error(error);
        });
    }
  };

  return (
    <div className="container mx-auto mt-8 text-gray-500 text-xs leading-8 uppercase ">
      <div className='flex justify-between border border-gray-300 pl-5 pr-5 p-2 rounded'>
        <span>Make a PDF file with Passport Size Photo, Marksheet, Caste Certificate, Id Proof and Income Certificate</span>
        <span>
          <input id='image' type='file' onChange={handleFileChange} />
          <Button
            variant='contained'
            size='small'
            color='error'
            className=''
            onClick={handleImageUpload}
            disabled={!image}
          >
            Upload File
          </Button>
        </span>
      </div>
    </div>
  );
};

export default DocumentUpload;
