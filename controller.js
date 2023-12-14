const { Mail } = require("./sendmail");
require("dotenv").config();

//To Update the Weather Location
const updateLocation = async (req, res) => {
    const {text,subject,mail,name} = req.body;

  try {
   
    // Send the first mail immediately after change the location
    await Mail(text,subject,mail,name);
    // if all done, a success reply will be send as a response
    res.status(200).json({
      message: "Location and Weather updated successfully",
    });
  } catch (error) {
    console.error("Error updating user location:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports =  updateLocation ;