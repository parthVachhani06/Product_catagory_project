const signUPmodel = require("../models/signUp");
const signUPcontroller = {
    signUP: async (req, res) => {


        try {
            
        const { username, email, password, confPassword } = req.body;
        const user = await signUPmodel.findOne({ email });


            if (!user) {
                if (password == confPassword) {
                    const newUser = new signUPmodel({
                        username,
                        email,
                        password
                    })
                   await newUser.save();
                    res.json({
                        message: "user created successfully",
                        data: `${username}`
                    })
                } else {
                    res.json({
                        message: "password and confirm password does not match"
                    })
                }
            } else {
                res.json({
                    message: "user already exist"
                })
            }
        } catch (err) {
            res.json({
                message: "something went wrong"
            })
        }




    }

}

     signupcontroller : (req, res) => {
        try {
           res.render("signup")
        } catch (err) {
           console.log("errr", err);
        }
     
     }

module.exports = signUPcontroller;