import React, { useState } from "react";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<string[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: true,
    });
    let url = photo.webPath || "";
    setPhotos((oldFiles) => [...oldFiles, url]);
  };

  const chooseFromGallery = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      const photo = URL.createObjectURL(e.target.files![0]);
      setPhotos((oldFiles) => [...oldFiles, photo]);
    }
  };

  const removePhoto = (index: string) => {
    const newPhotos = photos.filter((photo) => photo !== index);
    setPhotos(newPhotos);
  };

  return {
    takePhoto,
    photos,
    chooseFromGallery,
    removePhoto,
  };
}
