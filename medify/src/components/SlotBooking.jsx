import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { addDays, format } from "date-fns";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

const SlotBooking = ({
  hospitalName,
  city,
  state,
  type,
  onBookingConfirmed,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [error, setError] = useState("");

  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(new Date(), index);
    return {
      date: format(date, "EEE, dd MMM yyyy"),
      slots: {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      },
    };
  });

  const handleSlotClick = (date, time) => {
    setSelectedSlot({ date, time });
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsModalOpen(false);
    setIsSnackbarOpen(true);

    const booking = {
      date: selectedSlot.date,
      time: selectedSlot.time,
      email,
      hospitalName,
      city,
      state,
      type,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    onBookingConfirmed(hospitalName, selectedSlot.date, selectedSlot.time);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        style={{ width: "100%" }}
      >
        {dates.map((day, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelectedDateIndex(index)}
              style={{
                cursor: "pointer",
                padding: "10px",
                textAlign: "center",
                backgroundColor: selectedDateIndex === index ? "#e6f7ff" : "",
                borderRadius: "8px",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontWeight: selectedDateIndex === index ? "bold" : "normal",
                  color: "#007bff",
                }}
              >
                {day.date}
              </h4>
              <p style={{ margin: "0", color: "green" }}>
                {Object.values(day.slots).flat().length} Slots Available
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Time Slot Sections */}
      <div style={{ marginTop: "20px" }}>
        {["morning", "afternoon", "evening"].map((timeOfDay) => (
          <div
            key={timeOfDay}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                flex: "0 0 100px",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "16px",
              }}
            >
              {timeOfDay}
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {dates[selectedDateIndex].slots[timeOfDay].map((time, idx) => (
                <button
                  key={idx}
                  style={{
                    padding: "8px",
                    border: "1px solid #007bff",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#007bff",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleSlotClick(dates[selectedDateIndex].date, time)
                  }
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Confirmation Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Confirm booking</DialogTitle>
        <DialogContent>
          <p>
            Please enter your email to confirm booking for{" "}
            <strong>
              {selectedSlot?.time} on {selectedSlot?.date}
            </strong>
          </p>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            style={{ marginTop: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            style={{ textTransform: "none" }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsModalOpen(false)}
            style={{ textTransform: "none" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Booking Success Snackbar */}
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Booking Successful
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SlotBooking;
