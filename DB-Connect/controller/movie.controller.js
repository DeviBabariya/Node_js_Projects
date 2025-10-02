// const path = require('path')
// const fs = require('fs')
// const userModel = require('../model/movie.model');

// exports.homePage = async (req, res) => {
//     try {
//         let users = await userModel.find();
//         return res.render('index', { users });
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/');
//     }
// }

// exports.addUser = async (req, res) => {
//     try {
//         let imagePath = "";
//         if (req.file) {
//             imagePath = `/uploads/${req.file.filename}`
//         }
//         let user = await userModel.create({ ...req.body, profile: imagePath });
//         return res.redirect("/");
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/');
//     }
// }


// exports.deleteUser = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let user = await userModel.findById(id);
//         if (!user) {
//             console.log("User not found");
//             return res.redirect('/');
//         }
//         if (user.profile != "") {
//             try {
//                 let imagePath = path.join(__dirname, user.profile);
//                 await fs.unlinkSync(imagePath)
//             } catch (error) {
//                 console.log("Missing File");
//             }
//         }
//         await userModel.findByIdAndDelete(id);
//         console.log("User deleted successfully");
//         return res.redirect('/');
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/');
//     }
// }


// exports.editUser = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let user = await userModel.findById(id);
//         if (!user) {
//             console.log("User not found");
//             return res.redirect('/');
//         }
//         return res.render('edit-user', { user });
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/');
//     }
// }


// exports.updateUser = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let user = await userModel.findById(id);
//         if (!user) {
//             console.log("User not found");
//             return res.redirect('/');
//         }
//         let imagePath;
//         if (req.file) {
//             if (user.profile != "") {
//                 try {
//                     imagePath = path.join(__dirname, user.profile);
//                     await fs.unlinkSync(imagePath)
//                 } catch (error) {
//                     console.log("Missing File");
//                 }
//             }
//             imagePath = `/uploads/${req.file.filename}`;
//         } else {
//             imagePath = user.profile;
//         }
//         user = await userModel.findByIdAndUpdate(id, { ...req.body, profile: imagePath }, { new: true });
//         console.log("User updated successfully");
//         return res.redirect('/');
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/');

//     }
// }

const Movie = require("../model/movie.model");
const path = require("path");
const fs = require("fs");


const homepage = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render("index", { movies });
    } catch (error) {
        res.status(500).send("Error fetching products");
    }
}

const addForm = async (req, res) => {
    res.render('add_movie')
}

const addMovie = async (req, res) => {
    const image = req.file ? '/uploads/' + req.file.filename : "";
    await Movie.create({ ...req.body, image });
    res.redirect("/");
}

const editForm = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("edit_movie", { movies: movie });
}

const editmovie = async (req, res) => {
    const id = req.params.id;
    let movie = await Movie.findById(id);
    if (!movie) {
        return res.redirect("back");
    }
    let imagePath = movie.image;
    if (req.file) {
        const oldImagePath = path.join(__dirname, "..", movie.image);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
        }
        imagePath = `/uploads/${req.file.filename}`;
    }
    await Movie.findByIdAndUpdate(id, { ...req.body, image: imagePath }, { new: true });
    res.redirect("/");
};

 const deletemovie = async (req, res) => {
    const id = req.params.id;
    const record = await Movie.findById(id);
    if (record?.image) {
        const imagePath = path.join(__dirname, "..", record.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
    await Movie.findByIdAndDelete(id);
    res.redirect("/");
};



const viewSingleMovie = async (req, res) => {
  try {
    const id = req.params.id; 
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    res.render("view_movie", { movie }); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};




module.exports = { homepage, addForm, addMovie, editForm, editmovie, deletemovie, viewSingleMovie }


