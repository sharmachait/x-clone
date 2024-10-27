import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import React, { useState } from 'react'
import * as yup from "yup";
const Feed = () => {
  const handleSubmit = (value) => {
    console.log(value);
  }
  const validationSchema = yup.object().shape({
    content: yup.string().required("Content is required")
  })
  const formik = useFormik({
    initialValues: {
      content: "",
      image: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const postButtonStyles = {
    width: "100%",
    borderRadius: "29px",
    paddingX: "40px",
    bgcolor: "#1d9bf0"
  }
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setUploadingImage(false);
    setSelectedImage(imgUrl);
  }

  return (
    <div className='space-y-5 mx-2 pt-5'>
      <section className='pb-10 flex items-start gap-4'>
        <Avatar alt='username' src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"></Avatar>
        <div className='w-full'>
          <form action="">
            <div className=' border-2 px-4 py-1 rounded-full'>
              <input className='w-96 border-none outline-none text-xl bg-transparent '
                {...formik.getFieldProps("content")}
                type="text" name='content' placeholder='What is happening?' />
              {
                formik.errors.content && formik.touched.content && (
                  <span className='text-red-500'>{formik.errors.content}</span>
                )
              }
            </div>
            <div className='flex justify-between items-center mt-5'>
              <div className="flex space-x-5 items-center ml-4">
                <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                  <ImageIcon className='text-[#1d9bf0]'></ImageIcon>
                  <input type="file" name="imageFile" className='hidden' onChange={handleSelectImage} />
                </label>
                <FmdGoodIcon className='text-[#1d9bf0]'></FmdGoodIcon>
                <TagFacesIcon className='text-[#1d9bf0]'></TagFacesIcon>
              </div>
              <div className="">
                <Button sx={postButtonStyles} variant='contained'>
                  Post
                </Button>
              </div>
            </div>
          </form>
        </div>

      </section>
    </div>
  )
}

export default Feed