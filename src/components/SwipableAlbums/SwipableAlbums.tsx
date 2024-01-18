import { ALBUMS, SORT_BY } from "../../constants/SwipableAlbums";
import { NewAlbumButton } from "../Buttons";
import Album from "./Album";
import "./css/SwipableAlbums.css";

const SwipableAlbums = () => {
  const sortMethods = [
    {
      type: "Name",
    },
    {
      type: "Date",
    },
  ];
  const albums = [
    {
      images: [],
      name: "Doggos",
    },
    {
      images: [],
      name: "Food",
    },
    {
      images: [],
      name: "Bob",
    },
    {
      images: [],
      name: "Bob",
    },
    {
      images: [],
      name: "Bob",
    },
  ];

  return (
    <div id="swipable-albums" className="w-full h-full flex justify-center">
      <div className="w-10/12 flex flex-col">
        <div className="h-20 flex justify-center">
          <div
            id="drag-indicator"
            className="m-auto w-3/6 h-3 border rounded-xl"
          />
        </div>
        <div>
          <div className="mt-3 flex justify-between">
            <span>{ALBUMS}</span>
            <NewAlbumButton />
          </div>
          <div className="flex gap-16">
            {/* TODO: update to use better naming and styling */}
            <span>{SORT_BY}</span>
            {sortMethods &&
              sortMethods.map((method, key) => {
                return <div key={key}>{method.type}</div>;
              })}
          </div>
        </div>
        <div
          id="album-container"
          className="mt-10 flex flex-col gap-3.5 overflow-scroll"
        >
          {albums &&
            albums.map((album, key) => {
              return <Album key={key} album={album} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SwipableAlbums;
