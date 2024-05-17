const signUPmodel = require("../models/signUp");
const jwt = require("jsonwebtoken")
const signInconcntroller = {

    signIn: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await signUPmodel.findOne({ email })

            console.log("user ==>",user);

            if (!user) {
                return res.json({
                    message: "User not found"
                })

            }

            if (password == user.password) {

               const token = jwt.sign({
                    id: user.id,
                    email : user.email
                }, process.env.JWT_SECRET)

                 console.log("token ==>",token);

                 res.json({
                    message: "Login Successfull",
                    token
                })
            } else {
               res.json({
                    message: "Password is incorrect"
                })
            }

        } catch (error) {
            console.log("error", error);
            res.json({
                message: "Internal Server Error"
            })
        }

    }
}

module.exports = signInconcntroller;