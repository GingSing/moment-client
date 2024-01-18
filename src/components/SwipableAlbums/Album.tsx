import "./css/Album.css";

interface AlbumProps {
  album: {
    name: string;
  };
}

const Album = ({ album }: AlbumProps) => {
  return (
    <div
      id="album"
      className="w-full min-h-48 border rounded-3xl flex justify-end items-end"
    >
      <div className="p-5">{album && album.name}</div>
    </div>
  );
};

export default Album;
