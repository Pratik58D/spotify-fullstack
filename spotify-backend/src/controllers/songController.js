import { v2 as clodinary } from "cloudinary";
import SongModel from "../models/songmodel.js";

const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;

    // const {
    //   audio: [audioFile],
    //   image: [imageFile],
    // } = req.files;

    // // Now you can access the files as audioFile and imageFile
    // console.log(audioFile); // logs the audio file object
    // console.log(imageFile); // logs the image file object

    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    const audioUpload = await clodinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await clodinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    // console.log(name,desc,album,audioUpload,imageUpload);

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    const song = SongModel(songData);
    await song.save();

    return res
      .status(200)
      .json({ success: true, message: "Song Added", data: song });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ success: false, error });
  }
};

const listSong = async (req, res) => {
  try {
    const allSongs = await SongModel.find();
    return res.status(200).json({ success: true, songs: allSongs });
  } catch (error) {
    console.log(error);
    res.status(501).json({ success: false, error });
  }
};

const removeSong = async (req, res) => {
  try {
    const deleteSong = await SongModel.findByIdAndDelete(req.body.id);
    return res
      .status(200)
      .json({ sucess: true, message: "song removed", deleteSong });
  } catch (error) {
    console.log(error);
    res.status(501).json({ success: false, error });
  }
};

export { addSong, listSong, removeSong };
