import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


function MemeUploadPage({ memes, setMemes }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleCaptionChange = (e) => setCaption(e.target.value);
  

  const handleUpload = (e) => {
    e.preventDefault();

    if (image && caption) {
      setLoading(true);
      try {
        const newMeme = {
          image: image,
          caption: caption,
          id: uuidv4(),
        };
        setMemes((prevMemes) => [...prevMemes, newMeme]);
        setImage(null);
        setCaption("");
      } catch (error) {
        console.error("Error uploading meme:", error);
        alert("Error uploading meme. Please try again.");
      }
    } else {
      alert("Please select an image and add a caption");
      return;
    }
  };

  useEffect(() => {
    console.log(memes);
    setLoading(false);
  }, [memes]);

  return (
    <div className="w-full h-screen">
      <div className="w-full min-h-[60dvh] flex flex-col gap-10 justify-center items-center">
        <h1>Meme Upload</h1>
        <form className="w-[250px] flex flex-col gap-3" onSubmit={handleUpload}>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={handleImageChange}
            className="border outline-none px-3 py-1 rounded-3xl"
          />
          {image && (
            <div>
              <img
                src={URL.createObjectURL(image)}
                alt="preview-img"
                className="w-[300px] h-[300px]"
              />
            </div>
          )}

          <textarea
            value={caption}
            onChange={handleCaptionChange}
            placeholder="Enter caption"
            className="border h-full p-2 outline-none"
          />
          <button type="Submit" className="rounded-3xl" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MemeUploadPage;
