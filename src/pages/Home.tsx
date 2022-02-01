import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { PhotoList } from "../components/PhotoList";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import "./Home.css";
import { camera, image, add } from "ionicons/icons";

const Home: React.FC = () => {
  const { takePhoto, photos, chooseFromGallery, removePhoto } =
    usePhotoGallery();

  return (
    <IonPage class="app">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top" onClick={takePhoto}>
            <IonFabButton>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <input
                accept="image/*"
                id="upload-photo"
                type="file"
                style={{ position: "absolute", zIndex: -10, opacity: 0 }}
                onChange={chooseFromGallery}
              />
              <label htmlFor="upload-photo">
                <IonIcon icon={image} />
              </label>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <PhotoList removePhoto={removePhoto} photos={photos} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
