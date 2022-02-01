import { IonIcon, IonImg } from "@ionic/react";
import React from "react";
import { close } from "ionicons/icons";

import "./styles.css";

type PhotoCardProps = {
  photo: string;
  removePhoto: (index: string) => void;
};

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  removePhoto,
}) => {
  return (
    <div>
      <IonIcon
        color="#fff"
        icon={close}
        className="closeIcon"
        onClick={() => removePhoto(photo)}
      />
      <IonImg style={{ height: "100%" }} src={photo} />
    </div>
  );
};
