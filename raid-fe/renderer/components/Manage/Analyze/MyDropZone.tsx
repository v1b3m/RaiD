import { Box, Center } from "@chakra-ui/react";
import _ from "lodash";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  setFiles: (files: File[]) => void;
}

const MyDropZone: FC<Props> = ({ setFiles }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
};

export default MyDropZone;
