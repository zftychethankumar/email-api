const { StatusCodes } = require("http-status-codes");
//send an email
const sendEmail = async (req, res) => {
   try {
    res.json({ msg: "send mail"})
   } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.message });
   }
}

//read a stored email

const readEmail = async (req, res) => {
   try {
    res.json({ msg: "read mail"})
   } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.message });
   }
}

//delete a stored email
const deleteEmail = async (req, res) => {
  try{
 res.json({ msg: "delete mail"})
 }catch(err){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.message });
 }
}

module.exports = { sendEmail, readEmail, deleteEmail }