import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albummodel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColour } = req.body;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    const albumsaved = await album.save();

    return res
      .status(200)
      .json({ success: true, message: "album saved", albumsaved });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ success: false, error });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find();
    return res.status(200).json({success:true,message : "all albums",albums: allAlbums});
  } catch (error) {
    console.log(error);
    return res.status(501).json({ success: false, error });
  }
};

const removeAlbum = async (req, res) => {
  try {
    const deleteAlbum = await albumModel.findByIdAndDelete(req.body.id);
    return res
      .status(200)
      .json({ sucess: true, message: "album removed", deleteAlbum });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ success: false, error });
  }
};

export { addAlbum, listAlbum, removeAlbum };
