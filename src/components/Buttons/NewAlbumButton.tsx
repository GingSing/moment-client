import PlusSignSVG from "../../assets/svg/PlusSignSVG";
import { NEW_ALBUM } from "../../constants/Buttons";
import "./css/NewAlbumButton.css";

const NewAlbumButton = () => {
  return (
    <button
      id="new-album-button"
      className="py-1 px-2 border rounded-xl flex gap-1"
    >
      <PlusSignSVG className="" /> {NEW_ALBUM}
    </button>
  );
};

export default NewAlbumButton;
