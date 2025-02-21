import React, { useState } from "react";
import { WiSunrise, WiDaySunny, WiNightClear } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { selectSlotTime } from "../../redux/actions/appointmentAction";
const SlotsGrid = ({ slots }) => {
  // Group slots based on time ranges

  const dispatch = useDispatch();

  const selectedSlot = useSelector((state) => state.appointment.selectedSlot);
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);

  if (!selectedDoctor) {
    return null;
  }

  const morningSlots = slots.filter(
    (slot) => parseInt(slot.slotTime) >= 9 && parseInt(slot.slotTime) < 12
  );
  const afternoonSlots = slots.filter(
    (slot) => parseInt(slot.slotTime) >= 12 && parseInt(slot.slotTime) < 17
  );
  const eveningSlots = slots.filter(
    (slot) => parseInt(slot.slotTime) >= 17 && parseInt(slot.slotTime) <= 19.5
  );

  // Function to render slots
  const renderSlots = (slotList) => {
    const handleSlotClick = (slotTime) => {
      dispatch(selectSlotTime(slotTime));
    };

    return (
      <div className="grid grid-cols-4 gap-2">
        {slotList.map((slot, index) => (
          <div key={index}>
            {slot.status === "avl" && (
              <div
                onClick={() => handleSlotClick(slot.slotTime)}
                className={`
                    p-2 rounded-lg text-sm font-semibold text-center 
                    ${
                      selectedSlot === slot.slotTime
                        ? "border-2 border-gray-600 shadow-md"
                        : "border border-gray-200"
                    } 
                     bg-green-100 text-black cursor-pointer 
                  `}
              >
                {slot.slotTime}
              </div>
            )}

            {slot.status === "navl" && (
              <div
                onClick={() => handleSlotClick(slot.slotTime)}
                className={`
                    p-2 rounded-lg text-sm font-semibold text-center 
                    border border-gray-200
                     bg-white text-gray-600 opacity-[0.5]
                  `}
              >
                {slot.slotTime}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-50 rounded-xl w-full">
      <div className="flex flex-col gap-10">
        {morningSlots && morningSlots.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-600 mb-2 pb-1 flex gap-2 items-center justify-center">
              <WiSunrise className="text-yellow-500 text-3xl" />
              <p> Morning (9:00 AM - 12:00 PM)</p>
            </h3>

            {renderSlots(morningSlots)}
          </div>
        )}

        {afternoonSlots && afternoonSlots.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-600 mb-2 pb-1 flex gap-2 items-center justify-center">
              <WiDaySunny className="text-orange-500 text-3xl" />
              <p>Afternoon (12:00 PM - 5:00 PM)</p>
            </h3>

            {renderSlots(afternoonSlots)}
          </div>
        )}

        {eveningSlots && eveningSlots.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-600 mb-2 pb-1 flex gap-2 items-center justify-center">
              <WiNightClear className="text-blue-500 text-3xl" />
              <p>Evening (5:00 PM - 7:30 PM)</p>
            </h3>

            {renderSlots(eveningSlots)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotsGrid;

// <div
// onClick={() => handleSlotClick(slot.slotTime)}
// key={index}
// className={`
//     p-2 rounded-lg text-sm font-semibold text-center
//     ${selectedSlot === slot.slotTime ? "border-2 border-gray-600 shadow-md" : "border border-gray-200"}
//     ${slot.status === "avl" ? "bg-green-100 text-black cursor-pointer" : "bg-white text-black cursor-not-allowed"}
//   `}

// >
// {slot.slotTime}
// </div>
