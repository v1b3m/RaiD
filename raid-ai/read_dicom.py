## Load and Reading dicom format radiographs

import os
from glob import glob
import tensorflow as tf
import tensorflow_io as tfio

def read_dicom(path):
    """Load and read dicom type images."""
    image_bytes = tf.io.read_file(path)
    image = tfio.image.decode_dicom_image(
        image_bytes, 
        dtype = tf.uint16
    )
    
    image = tf.squeeze(image, axis = 0)
    
    image = tf.image.resize(
        image, 
        (500, 500), 
        preserve_aspect_ratio = True
    )
    
    image = image - tf.reduce_min(image)
    image = image / tf.reduce_max(image)
    image = tf.cast(image * 255, tf.uint8)
    
    return image


def convert_dicom_to_jpg(image_path, save_dir):
    """
    Converts a .dicom image to .jpg for easier storage and loading.
    The converted image(s) are saved in the save_dir directory.
    """
    for dicom_file in image_path:
        image_ = read_dicom(dicom_file)
        
        image = tf.io.encode_jpeg(
        image_, 
        quality = 100, 
        format = 'grayscale'
    )
    
        name = dicom_file.replace(".dicom", ".jpg")
        tf.io.write_file(os.path.join(save_dir, name), image) # saves the converted images

if __name__=="__main__":

    BASE_PATH = "/content/drive/MyDrive/final_year_project/raid/dicom_images/" # location of converted jpg images
    DICOM_IMG_PATHS = glob("/content/drive/MyDrive/final_year_project/raid/dicom_images/*.dicom")

    convert_dicom_to_jpg(DICOM_IMG_PATHS, BASE_PATH)

    
