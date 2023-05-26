//components
import Photo from "./photo";
import Header from "./header";
//dependencies
interface PhotosIn {
  photos: any;
  deletehandler: any;
}

const Photos = ({ photos, deletehandler }: PhotosIn) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {photos.length === 0 && <Header title={"Add photo"} />}
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
