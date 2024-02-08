import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import AddPhotoImage from "@/styles/assets/icons/ic_twotone-add-photo-alternate.svg";

interface CustomFile {
  file: File | null;
  nombreArchivo: string;
  preview: string | null;
}

interface ImageUploadProps {
  onImageSelected: (imageUrl: string | null) => void;
  disabled?: boolean;
}

const Container = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerButton = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const ContainerImage = styled.div``;

const FileInput = styled.input`
  display: none;
`;

const ImageUpload: FC<ImageUploadProps> = ({
  onImageSelected,
  disabled = false,
}) => {
  const [selectedImage, setSelectedImage] = useState<CustomFile | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Archivo seleccionado:", file);

    if (file && file.type.startsWith("image/")) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const dataUrl = fileReader.result as string;
        setSelectedImage({ file, nombreArchivo: file.name, preview: dataUrl });
        onImageSelected(dataUrl); // Notifica al componente padre
      };
      fileReader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      onImageSelected(null);
    }
    event.target.value = "";
  };

  return (
    <Container>
      <ContainerButton>
        <ContainerImage>
          {selectedImage && selectedImage.preview ? (
            <img
              src={selectedImage.preview}
              alt={selectedImage.nombreArchivo}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          ) : (
            <Image
              src={AddPhotoImage}
              alt="Añadir imagen"
              width={80}
              height={80}
              objectFit="cover"
            />
          )}
        </ContainerImage>
        <FileInput
          type="file"
          onChange={handleFileChange}
          accept="image/png,image/jpeg"
          disabled={disabled}
        />
      </ContainerButton>
    </Container>
  );
};

export { ImageUpload };
