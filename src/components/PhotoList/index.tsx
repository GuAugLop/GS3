import React from "react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./styles.css";
import { PhotoCard } from "../PhotoCard";

type PhotosListProps = {
  photos: string[];
  removePhoto: (index: string) => void;
};

export const PhotoList: React.FC<PhotosListProps> = ({
  photos,
  removePhoto,
}) => {
  if (photos.length === 0)
    return (
      <p className="emptyText">
        Clique no <div className="buttonIcon">+</div> para escolher uma foto ou
        fotografar com a sua câmera.
      </p>
    );
  return (
    <IonGrid>
      <IonRow>
        {photos.map((photo, index) => (
          <IonCol size="6" key={index}>
            <PhotoCard removePhoto={removePhoto} photo={photo} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
