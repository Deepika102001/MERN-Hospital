const express = require('express');
const mongoose = require('mongoose');
const UserModel=require('./user')
const AppoinmentModel=require('./Appointment')
const MedicineModel=require('./Medicine')
const OfficialtModel=require('./official')
const cors =require("cors")

const app = express();
const port = 1111;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware 
// 
// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/MERN-hosp'; // Change this to your actual database name

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {});
const db = mongoose.connection;

// ===================================== USER ===============================================

// get all
app.get('/users', async (req, res) => {
    
    try {
      const user = await UserModel.find(); // get all
      // Send the data as JSON response
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get user by email
app.post('/userEmail', async (req, res) => {
  console.log("0000000000000");
  const userEmail = req.body.email;
  console.log(userEmail,"-------------");
    
    try {
    const user = await UserModel.findOne({ email: userEmail }); 
     console.log(user);
      // Send the data as JSON response
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user
app.post('/createuser', async (req, res) => {
  const userData = req.body;

  try {
    // Check if user with the given email already exists
    const existingUser = await UserModel.findOne({ email: userData.email });

    if (existingUser) {
      // User with the same email already exists
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // If the user doesn't exist, create a new user
    const newUser = await UserModel.create(userData);

    // Send the data as JSON response
    if (newUser) {
      res.json(newUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







// update user details by email(Update profile)
app.put('/updateUser', async (req, res) => {
  const userEmail = req.body.email;
  const updatedData=req.body;

  if (!userEmail) {
    return res.status(400).json({ error: 'Email is required in the request body' });
  }

  try {
    
    const updatedUser = await UserModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (updatedUser) {
      console.log(updatedUser);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//update password for user( User Forgot password)
app.put('/updateUserPassword', async (req, res) => {
  const userEmail = req.body.email;
  const updatePassword = req.body.password;

  if (!userEmail || !updatePassword) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  try {
    const data = await UserModel.findOne({ email: userEmail });

    if (!data) {
      return res.status(404).json({ error: 'User not found' });
    }

    data.password = updatePassword; // Update the password field

    await data.save(); // Save the updated password

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// update edit official details by email(Update Profile for Official [doc,frontoff.pharmacist])
app.put('/updateUsers', async (req, res) => {
  console.log(req.body);
  const userEmail = req.body.cemail;
  const updatedData={
  email: req.body.email,
  name:req.body.name,
  contact:req.body.number,
      age:req.body.age,
      gender:req.body.gender,
  password: req.body.password,
  role: "User",
};

  if (!userEmail) {
    return res.status(400).json({ error: 'email is required in the request body' });
  }

  try {
    
    const datas = await UserModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      console.log(datas);
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ========================================== APPOINTMENT =============================================================================


// get all Appoinment  (frontoffice viewall appointment list)
app.get('/appoinment', async (req, res) => {
    
    try {
      const datas = await AppoinmentModel.find(); // get all
      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get Appointment  by id
app.get('/appoinmentid/', async (req, res) => {
  const AppointmentId = req.body.appointmentId;
    
    try {
    const datas = await UserModel.findOne({ appointmentId: AppointmentId }); 

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Booking an appointment for both frontoffice and patient
app.post('/newAppoinment', async (req, res) => {
const newAppoinment = req.body;
    
    try {
    const datas = await AppoinmentModel.create(newAppoinment)

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// update user details by email(Frontoffice approve)
app.put('/updateAppoint', async (req, res) => {
  const AppointmentId = req.body.appointmentId;
  const updatedData=req.body;

  if (!AppointmentId) {
    return res.status(400).json({ error: 'AppointmentId is required in the request body' });
  }

  try {
    
    const datas = await AppoinmentModel.findOneAndUpdate(
        { appointmentId: AppointmentId },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// ========================================== MEDICINE =============================================================================


// get all Medicine (List of Medicine)
app.get('/Medicine', async (req, res) => {
    
    try {
      const datas = await MedicineModel.find(); // get all
      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get medicine  by name (Searching medicine by name)
app.get('/medicineName/', async (req, res) => {
  const MedicineName = req.body.medicineName;
    
    try {
    const datas = await MedicineModel.findOne({ medicineName: MedicineName }); 

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create Medicine  (Adding for New medicine in pharmacist)
app.post('/newmedicine', async (req, res) => {
const newMedicine = req.body;
    
    try {
    const datas = await MedicineModel.create(newMedicine)

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });   

// update Medicine details by email in pharmacist
app.put('/updatemedicine', async (req, res) => {
    const MedicineName = req.body.medicineName;
  const updatedData=req.body;
  console.log(MedicineName);

  if (!MedicineName) {
    return res.status(400).json({ error: 'MedicineName is required in the request body' });
  }

  try {
    
    const datas = await MedicineModel.findOneAndUpdate(
        { medicineName: MedicineName },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete medicine details by email(Delete medicine in pharmacist)
app.delete('/deletemedicine/:medicineName', async (req, res) => {
    console.log(req.body);
    const MedicineName = req.params.medicineName;
    console.log(MedicineName);
//   const updatedData=req.body;
console.log(MedicineName);
  if (!MedicineName) {
    return res.status(400).json({ error: 'MedicineName is required in the request body' });
  }

  try {
    
    const datas = await MedicineModel.deleteOne({ medicineName: MedicineName })

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});+


// ========================================== OFFICIAL =============================================================================


// get all Official
app.get('/Official', async (req, res) => {
    
    try {
      const datas = await OfficialtModel.find(); // get all
      // Send the data as JSON response
      console.log(datas);
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get official  by name (Login for Doctor, frontoffice, pharmacist)
app.post('/officialEmail/', async (req, res) => {
    console.log(req);
  const userEmail = req.body.email;
    console.log(userEmail);
    try {
    const datas = await OfficialtModel.findOne({ email: userEmail }); 
    console.log(datas);

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user (Register for Doctor, frontoffice, pharmacist)
app.post('/newofficial', async (req, res) => {
  const newofficial = req.body;
  console.log(newofficial);

  try {
    // Check if an official with the given email already exists
    const existingOfficial = await OfficialtModel.findOne({ email: newofficial.email });

    if (existingOfficial) {
      // Official with the same email already exists
      return res.status(400).json({ error: 'Official with this email already exists' });
    }

    // If the official doesn't exist, create a new official
    const datas = await OfficialtModel.create(newofficial);

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// update edit official details by email(Edit Profile for Doctor, frontoffice, pharmacist)
app.put('/updateofficial', async (req, res) => {
  console.log(req.body);
  const userEmail = req.body.cemail;
  const updatedData={
  email: req.body.email,
  name:req.body.name,
  password: req.body.password,
  role: req.body.role
};

  if (!userEmail) {
    return res.status(400).json({ error: 'email is required in the request body' });
  }

  try {
    
    const datas = await OfficialtModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// update user details by email(Edit User profile )
app.put('/updateUser', async (req, res) => {
  const userEmail = req.body.email;
  const updatedData=req.body;

  if (!userEmail) {
    return res.status(400).json({ error: 'email is required in the request body' });
  }

  try {
    
    const datas = await OfficialtModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// update user Password by email(Forgot password for  Doctor, frontoffice, pharmacist )
app.put('/updatePassword', async (req, res) => {
  const userEmail = req.body.email;
  const updatePassword=req.body.password;

  if (!userEmail || !updatePassword) {
    return res.status(400).json({ error: 'Email and Password is required in the request body' });
  }

  try {
    const data = await OfficialtModel.findOne({ email: userEmail }); 
    

    // Send the data as JSON response
    if (!data) {
      res.status(404).json({ error: 'User not found' });
    } 
    data.password = updatePassword;

    await data.save(); //save the updated password

    return res.status(200).json({message:'Password updated successfully'});
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
