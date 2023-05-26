//components
import Photo from "./photo";
//dependencies
interface PhotosIn {
  photos: any;
  deletehandler: any;
}

const Photos = ({ photos, deletehandler }: PhotosIn) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {photos.map((photo: any) => (
        <Photo
          photoObjects={photo}
          deletehandler={deletehandler}
          key={photo._id}
        />
      ))}
    </div>
  );
};
export default Photos;
