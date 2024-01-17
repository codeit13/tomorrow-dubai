import { Approval, AttachFile, Delete, Save } from "@mui/icons-material";
import RoofingIcon from "@mui/icons-material/Roofing";
import {
  Badge,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { experimentalStyled as styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import PropertyMaster from "../../master.json";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../Firebase";
import AlertMessage from "../../component/custom/AlertMessage";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchAgents,
} from "../../store/adminAction";
import Gallery from "./Gallery";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./assets/css/style.css";

let modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
let formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BorderItem = styled(Paper)(({ theme, title }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  position: "relative", // Add position relative to the container

  "&::before": {
    content: "''", // Empty content
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: `2px solid ${grey[300]}`, // Border style
    borderRadius: theme.shape.borderRadius, // Border radius
    pointerEvents: "none", // Make it ignore pointer events
  },

  "&::after": {
    content: `'${title}'`, // Text content
    position: "absolute",
    top: "-10px",
    left: "10px",
    fontSize: "12px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    padding: "2px 6px",
    borderRadius: theme.shape.borderRadius,
  },
}));

const PropertyForm = ({ selectedProperty, editable, direct, handleClose }) => {
  const agents = useSelector((state) => state.admin.agents);
  const dispatch = useDispatch();
  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: "",
    error: null,
  });

  const [formData, setFormData] = useState({
    id: "",
    homeType: "",
    isBuy: true, // Significance of property directly listed for Buying.
    isOffPlan: false,
    bed: "",
    bath: "",
    price: "",
    priceOnApplication: false,
    currency: "",
    sqFt: "",
    address: "",
    city: "",
    state: "",
    title: "",
    propertyName: "",
    description: "",
    images: [],
    img1: "/home3.jpg",
    img2: "",
    yearBuilt: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    sellerType: "",
    isListed: "",
    sellDuration: "",
    amenities: [],
    details: {
      "Completion Date": "",
      Developer: "",
      Lifestyle: "",
      "Property Type": "",
      "Available Unit": "",
      "Price Range": "",
    },
    units: {
      "2 Bedrooms": {
        sqFt: "",
        price: "",
      },
      "3 Bedrooms": {
        sqFt: "",
        price: "",
      },
      "4 Bedrooms": {
        sqFt: "",
        price: "",
      },
      "5 Bedrooms": {
        sqFt: "",
        price: "",
      },
    },
    paymentPlans: {
      "On Booking": "",
      "During Construction": "",
      Completion: "",
    },
    // ... other fields
    location: {
      // Initialize with default or existing values
      type: "Point", // Assuming you're using GeoJSON Point type
      coordinates: [0, 0], // Default or existing coordinates
    },
    agent: {
      _id: "",
      name: "",
    },
    status: "",
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      // Fetch agents data
      await dispatch(fetchAgents());

      console.log("Selected Property::", selectedProperty);

      if (selectedProperty) {
        // Update the agent field with nested properties
        if (selectedProperty.agent) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...selectedProperty,
            agent: {
              _id: selectedProperty.agent._id, // Keep the existing _id
              name: selectedProperty.agent.name, // Keep the existing name
            },
            location: {
              ...prevFormData.location,
            },
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...selectedProperty,
            agent: {
              _id: "",
              name: "",
            },
          }));
        }

        console.debug("Effect Form Data::", formData);
      }
    }
    fetchData();
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  }, [selectedProperty]); // Include 'agents' in the dependency array

  const fetchCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const [lon, lat] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
        return [lon, lat];
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handlePropertyDescriptionChange = (content) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: content,
    }));
  };

  const handleChange = async (event) => {
    const { name, value, label, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    console.log("Name::", name, " Value::", newValue, " Label::", label);
    if (name === "agent") {
      // For the agent field, set the _id as the value
      setFormData((prevFormData) => ({
        ...prevFormData,
        agent: {
          ...prevFormData.agent,
          _id: newValue, // Set the _id of the selected agent
        },
        location: {
          ...prevFormData.location,
        },
      }));
    } else if (name == "isOffPlan") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isOffPlan: newValue == "Yes" || newValue == true ? true : false,
      }));
    } else if (name.split("-")[0] === "details") {
      let newName = name.split("-")[1];
      // For other fields, update as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        // [name]: newValue,
        details: {
          ...prevFormData.details,
          [newName]: newValue,
        },
      }));
    } else if (name.split("-")[0] === "paymentPlans") {
      let newName = name.split("-")[1];
      // For other fields, update as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        // [name]: newValue,
        paymentPlans: {
          ...prevFormData.paymentPlans,
          [newName]: newValue,
        },
      }));
    } else if (name.split("-")[0] === "units") {
      let newLabel = name.split("-")[1];
      let newName = name.split("-")[2];
      // For other fields, update as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        // [name]: newValue,
        units: {
          ...prevFormData.units,
          [newName]: {
            ...prevFormData.units[newName],
            [newLabel]: newValue,
          },
        },
      }));
    } else {
      {
        // For other fields, update as usual
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue,
          location: {
            ...prevFormData.location,
          },
        }));
      }
    }
    // Update location field if both latitude and longitude are provided
    if (
      formData &&
      formData.location &&
      formData.location.coordinates &&
      formData.location.coordinates[0] !== NaN &&
      formData.location.coordinates[1] !== NaN
    ) {
      console.log("setting location formdata: ");
      setFormData((prevFormData) => ({
        ...prevFormData,
        location: {
          type: "Point",
          coordinates: [
            parseFloat(prevFormData.location.coordinates[0]),
            parseFloat(prevFormData.location.coordinates[1]),
          ],
        },
      }));
    }
  };

  const handleGeolocation = async (event) => {
    const { name, value, type } = event.target;
    //geocodeAddress(newValue).then((coordinates) => {
    console.log("Address::", name, value);
    const coordinates = await fetchCoordinates(value);
    console.log("Coordinates::", coordinates);
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: {
        type: "Point",
        coordinates: coordinates,
      },
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form logic here
    let msg = "";
    console.debug("Submitted", formData);
    try {
      const clickedButton = event.nativeEvent.submitter;
      console.debug(
        "Clicked::",
        clickedButton.id,
        " Evaluate ",
        clickedButton.id === "deleteBtn"
      );
      if (clickedButton.id === "approveBtn") {
        console.debug("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        console.debug(
          "Editable ::",
          editable,
          "Selected Property::",
          selectedProperty
        );
        if (selectedProperty && selectedProperty.id) {
          await dispatch(updateProduct(formData, "APPROVED"));
        } else {
          await dispatch(createProduct(formData, "APPROVED"));
        }
        msg = "Property Data Saved And Approved Successfully!";
      } else if (clickedButton.id === "saveBtn") {
        console.debug("Clicked Save Button::", selectedProperty);
        if (selectedProperty && selectedProperty.id) {
          console.debug("Updating property ", formData, "Status:", "draft");
          await dispatch(updateProduct(formData, "DRAFT"));
        } else {
          console.debug("Creating property ", formData, "Status:", "draft");
          await dispatch(createProduct(formData, "DRAFT"));
        }
        msg = "Property Data Saved Successfully!";
      }
      console.debug("Data::", formData);
      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
      setShowAlert(true);
      // Hide the message and close the form after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 3000);
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
  };

  const handleDelete = async (event) => {
    let msg = "";
    try {
      console.debug("Clicked Delete button");
      await dispatch(deleteProduct(formData));
      msg = `Property ${formData.id} is Deleted Successfully!`;
      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
      setShowAlert(true);
      // Hide the message and close the form after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 3000);
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
  };

  // Use the updated formData value outside of the handleSubmit function
  useEffect(() => {
    console.debug("Updated Data:", formData);
  }, [formData]);

  const handleCheckboxChange = (value) => (event) => {
    const { value, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      amenities: checked
        ? [...prevFormData.amenities, value] // add the selected option
        : prevFormData.amenities.filter((option) => option !== value), // remove the deselected option
      location: {
        ...prevFormData.location,
      },
    }));
  };

  const handlePriceCheckboxChange = (value) => (event) => {
    console.log("Price on Application clicked");
    const { name, value, checked } = event.target;
    console.log("Value::", value, "", checked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      priceOnApplication: checked,
      location: {
        ...prevFormData.location,
      },
    }));
  };
  const fileInputRef = useRef(null);

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const handleIconButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewAvatar(reader.result);
    };
    reader.readAsDataURL(file);

    const storageRef = ref(storage, file.name); // Create a reference to the storage location
    await uploadBytes(storageRef, file); // Upload the file to the storage location
    const imageUrl = await getDownloadURL(storageRef); // G
    console.debug("Avatar URL", imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      img1: imageUrl,
      location: {
        ...prevFormData.location,
      },
    }));
    console.debug("Form Data", formData);
  };

  const fileInputGalleryRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleGalleryIconButtonClick = () => {
    fileInputGalleryRef.current.click();
  };

  const handleImageGalleryUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    const storageRef = ref(storage, file.name); // Create a reference to the storage location
    await uploadBytes(storageRef, file); // Upload the file to the storage location
    const imageUrl = await getDownloadURL(storageRef); // G
    console.debug("Gallery URL", imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, imageUrl],
      location: {
        ...prevFormData.location,
      },
    }));
    console.debug("Form Data", formData);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Paper elevation={24} sx={{ padding: 1, mb: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{ paddingTop: 1, mb: 1, background: blue[200] }}
          justifyContent={"space-between"}
        >
          <Grid item xs={6} sm={6} lg={6} pb={1}>
            <IconButton>
              <RoofingIcon />
              <Typography sx={{ paddingLeft: 2, color: grey[900] }}>
                {" "}
                Property : {formData.id}
              </Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="saveBtn"
              size="small"
            >
              Save
              <Save />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 0.5 }}
              id="approveBtn"
              size="small"
            >
              Approve
              <Approval />
            </Button>
            {formData.id && (
              <Button
                type="button"
                variant="contained"
                color="error"
                sx={{ marginLeft: 0.5, mr: 0.5 }}
                id="deleteBtn"
                size="small"
                onClick={handleDelete}
              >
                DELETE
                <Delete />
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            {eventStatus.isSuccess && (
              <>
                <AlertMessage
                  type="success"
                  message={eventStatus.msg}
                  open={showAlert}
                  onClose={handleCloseAlert}
                />
              </>
            )}
            {eventStatus.error && (
              <AlertMessage
                type="error"
                message={eventStatus.error}
                open={showAlert}
                onClose={handleCloseAlert}
              />
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Property Title */}
            <TextField
              label="Property Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Property Name */}
            <TextField
              label="Property Name"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Property Location */}
            <TextField
              label="Property Full Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleGeolocation}
              fullWidth
              multiline
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Home Type */}
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>Home Type</InputLabel>
              <Select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.propertyType.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Beds */}
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>
                How Many Beds
              </InputLabel>
              <Select
                name="bed"
                value={formData.bed}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.beds.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Baths */}
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>
                How Many Baths
              </InputLabel>
              <Select
                name="bath"
                value={formData.bath}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.baths.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Property Size */}
            <TextField
              label="Property Size"
              name="sqFt"
              type="number"
              value={formData.sqFt}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Price */}
            <TextField
              label="Property Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6} mt={1}>
            {/* Price on Application */}
            <FormControlLabel
              key="priceOnApplication"
              control={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    name="priceOnApplication"
                    // value={formData.priceOnApp}
                    checked={formData.priceOnApplication}
                    onChange={handlePriceCheckboxChange()}
                  />
                </div>
              }
              label="Price on Application"
            />
          </Grid>

          <Grid item xs={12} sm={4} lg={4} mt={1}>
            {/* Image Upload */}
            <Item>
              <Badge
                badgeContent={
                  <label htmlFor="file-input">
                    <IconButton
                      component="span"
                      aria-label="Upload File"
                      onClick={handleIconButtonClick}
                    >
                      <AttachFile />
                    </IconButton>
                  </label>
                }
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <img
                  src={formData.img1}
                  alt=""
                  loading="lazy"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    objectFit: "scale-down",
                  }}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleAvatarUpload}
                />
              </Badge>
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} mt={1}>
            {/* Ammenties - v-for */}
          </Grid>

          <Grid item xs={12} sm={12} lg={12} mt={3} mb={3}>
            {/* Property Description */}
            {/* <TextField
              label="Property Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              required
              rows={16}
            /> */}
            <InputLabel style={{ background: "#fff", marginBottom: "10px" }}>
              Property Description
            </InputLabel>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={formData.description}
              onChange={handlePropertyDescriptionChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Is this Off Plan */}
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>
                Is this property Off Plan?
              </InputLabel>
              <Select
                name="isOffPlan"
                value={
                  formData.isOffPlan == true || formData.isOffPlan == "Yes"
                    ? "Yes"
                    : "No"
                }
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.offPlan.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Ammenties - Checkboxes */}
            <BorderItem title="Amenities">
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {PropertyMaster.amenities.map((option) => (
                      <Grid item xs={2} sm={4} md={4} key={option}>
                        <FormControlLabel
                          key={"fcl" + option}
                          control={
                            <Checkbox
                              name="amenities"
                              value={option}
                              checked={formData.amenities.includes(option)}
                              onChange={handleCheckboxChange(option)}
                            />
                          }
                          label={option}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </BorderItem>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Details - 6 Boxes */}
            <BorderItem title="Details">
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                    {PropertyMaster.details.map((option) => (
                      <Grid
                        item
                        xs={6}
                        sm={3}
                        md={3}
                        mt={4}
                        mr={4}
                        key={option}
                      >
                        <TextField
                          label={option}
                          name={`details-${option}`}
                          type="text"
                          value={formData.details[`${option}`]}
                          onChange={handleChange}
                          fullWidth
                          size="small"
                        />
                        {/* <FormControlLabel
                          key={"details" + option}
                          control={
                            <Checkbox
                              name="details"
                              value={option}
                              checked={formData.details.includes(option)}
                              onChange={handleCheckboxChange(option)}
                            />
                          }
                          label={option}
                        /> */}
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </BorderItem>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Units - 6 Boxes */}
            <BorderItem title="Units">
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                    {PropertyMaster.units.map((option) => (
                      <Grid item xs={6} sm={6} md={4} mr={4} key={option}>
                        <BorderItem title={option} m={2}>
                          <TextField
                            label="Sq Ft"
                            name={`units-sqFt-${option}`}
                            type="text"
                            value={formData.units[`${option}`].sqFt}
                            onChange={handleChange}
                            fullWidth
                            style={{ marginBottom: 8 }}
                            size="small"
                          />
                          <TextField
                            label="Price"
                            name={`units-price-${option}`}
                            type="text"
                            value={formData.units[`${option}`].price}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                          />
                        </BorderItem>
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </BorderItem>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} mt={1}>
            {/* Payment Plans - 6 Boxes */}
            <BorderItem title="Payment Plans">
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                    {PropertyMaster.paymentPlans.map((option) => (
                      <Grid
                        item
                        xs={6}
                        sm={3}
                        md={3}
                        mt={4}
                        mr={4}
                        key={option}
                      >
                        <TextField
                          label={option}
                          name={`paymentPlans-${option}`}
                          type="text"
                          value={formData.paymentPlans[`${option}`]}
                          onChange={handleChange}
                          fullWidth
                          size="small"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </BorderItem>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Year Built"
              name="yearBuilt"
              type="number"
              value={formData.yearBuilt}
              onChange={handleChange}
              fullWidth
              inputProps={{
                min: 2000,
              }}
              size="small"
            />
          </Grid>
          {false && !direct && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Phone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Seller Type"
                  name="sellerType"
                  value={formData.sellerType}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel style={{ background: "#fff" }}>
                    Is Listed
                  </InputLabel>
                  <Select
                    name="isListed"
                    value={formData.isListed}
                    onChange={handleChange}
                    required
                    size="small"
                  >
                    {PropertyMaster.isListed.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>Agent</InputLabel>
              <Select
                name="agent"
                value={formData.agent._id}
                onChange={handleChange}
                required
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {agents.map((agent) => (
                  <MenuItem key={agent._id} value={agent._id}>
                    {agent.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel style={{ background: "#fff" }}>
                Availability Duration
              </InputLabel>
              <Select
                name="sellDuration"
                value={
                  PropertyMaster.duration.find(
                    (option) =>
                      formData.sellDuration.toLowerCase() ===
                      option.toLowerCase()
                  ) || ""
                }
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.duration.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item>
            <BorderItem title="Image Gallery">
              <Gallery list={formData.images} />
            </BorderItem>
            <div>
              <input
                type="file"
                ref={fileInputGalleryRef}
                style={{ display: "none" }}
                onChange={handleImageGalleryUpload}
              />
              <label htmlFor="file-input">
                <IconButton
                  component="span"
                  aria-label="Upload File"
                  onClick={handleGalleryIconButtonClick}
                >
                  <AttachFile />
                </IconButton>
              </label>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="saveBtn"
              size="small"
            >
              Save
              <Save />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 0.5 }}
              id="approveBtn"
              size="small"
            >
              Approve
              <Approval />
            </Button>
            {formData.id && (
              <Button
                type="button"
                onClick={handleDelete}
                variant="contained"
                color="error"
                sx={{ marginLeft: 0.5, mr: 0.5 }}
                id="deleteBtn"
                size="small"
              >
                DELETE
                <Delete />
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PropertyForm;
