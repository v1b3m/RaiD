import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Center } from "@chakra-ui/react";

function MyDropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log(getInputProps());

  return (
    <Box
      {...getRootProps()}
      cursor="default"
      height={{ base: "10rem", md: "10rem", lg: "15rem" }}
      width="100%"
      bg="brand.jet"
      p="1rem"
    >
      <Center border="1px" height="100%" borderStyle="dashed">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </Center>
    </Box>
  );
}

export default MyDropZone;
