"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FitbotRegistrationForm() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [bmiCategory, setBmiCategory] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [medicalConditions, setMedicalConditions] = useState("")
  const [membershipType, setMembershipType] = useState("")

  // Calculate BMI when weight or height changes
  const calculateBMI = () => {
    if (weight && height) {
      setIsCalculating(true)
      setShowAnimation(true)

      // Simulate calculation time with animation
      setTimeout(() => {
        // BMI formula: (weight in pounds * 703) / (height in inches)²
        const bmiValue = (
          (Number.parseFloat(weight) * 703) /
          (Number.parseFloat(height) * Number.parseFloat(height))
        ).toFixed(1)
        setBmi(bmiValue)

        // Determine BMI category
        if (Number.parseFloat(bmiValue) < 18.5) {
          setBmiCategory("Underweight")
        } else if (Number.parseFloat(bmiValue) >= 18.5 && Number.parseFloat(bmiValue) < 25) {
          setBmiCategory("Normal weight")
        } else if (Number.parseFloat(bmiValue) >= 25 && Number.parseFloat(bmiValue) < 30) {
          setBmiCategory("Overweight")
        } else {
          setBmiCategory("Obese")
        }

        setIsCalculating(false)
      }, 3000) // 3 second animation
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted successfully! Thank you for registering with Fitbot Gym.")
  }

  // Format phone number as (xxx) xxx-xxxx
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "")
    if (cleaned.length === 0) return ""

    if (cleaned.length <= 3) {
      return `(${cleaned}`
    } else if (cleaned.length <= 6) {
      return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3)}`
    } else {
      return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`
    }
  }

  return (
    <div className="container max-w-4xl mx-auto p-6 bg-white/70 rounded-xl shadow-lg relative">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="text-4xl font-extrabold">
          {Array.from("FITBOT").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block mx-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700"
              initial={{ y: -50 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 5,
                },
              }}
              whileHover={{
                scale: 1.5,
                rotate: 10,
                transition: { duration: 0.2 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
      <div className="header text-center mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fitbot-high-resolution-logo-removebg-preview-0grdbcFkadLeWdP9NjKCz9QInzZ8HC.png"
          alt="Fitbot Logo"
          className="max-w-[150px] mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-pink-600 mb-2 relative">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            className="inline-block"
          >
            G
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            className="inline-block"
          >
            y
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="inline-block"
          >
            m
          </motion.span>
          <motion.span className="inline-block mx-2">R</motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            F
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            i
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            t
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            b
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              },
            }}
            className="inline-block text-purple-700 font-extrabold"
          >
            t
          </motion.span>
          <motion.span className="inline-block mx-2">R</motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className="inline-block"
          >
            e
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="inline-block"
          >
            g
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="inline-block"
          >
            i
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            className="inline-block"
          >
            s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.7 },
            }}
            className="inline-block"
          >
            t
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.8 },
            }}
            className="inline-block"
          >
            r
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.9 },
            }}
            className="inline-block"
          >
            a
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.0 },
            }}
            className="inline-block"
          >
            t
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.1 },
            }}
            className="inline-block"
          >
            i
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.2 },
            }}
            className="inline-block"
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.3 },
            }}
            className="inline-block"
          >
            n
          </motion.span>
          <motion.span className="inline-block mx-2">F</motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.4 },
            }}
            className="inline-block"
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.5 },
            }}
            className="inline-block"
          >
            r
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.6 },
            }}
            className="inline-block"
          >
            m
          </motion.span>
        </h1>
        <p className="text-gray-800 font-medium">
          Join our gym and start your fitness journey today! Please fill out the form to register.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <section className="border-b border-black/20 pb-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4 pb-1 border-b-2 border-pink-600 inline-block">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block font-semibold text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block font-semibold text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                required
              />
            </div>
          </div>

          {/* Weight, Height and BMI Section with Animation */}
          <div className="mt-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="weight" className="block font-semibold text-gray-800">
                  Current Weight (lbs) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  onBlur={calculateBMI}
                  className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                  min="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="height" className="block font-semibold text-gray-800">
                  Height (inches) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  onBlur={calculateBMI}
                  className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 relative">
                <label htmlFor="bmi" className="block font-semibold text-gray-800">
                  BMI
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="bmi"
                    value={bmi}
                    readOnly
                    className="w-full p-3 border border-black/30 rounded-md bg-white/80"
                  />

                  {bmiCategory && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 font-medium text-sm"
                      style={{
                        color:
                          bmiCategory === "Underweight"
                            ? "#3b82f6"
                            : bmiCategory === "Normal weight"
                              ? "#10b981"
                              : bmiCategory === "Overweight"
                                ? "#f59e0b"
                                : "#ef4444",
                      }}
                    >
                      {bmiCategory}
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="goalWeight" className="block font-semibold text-gray-800">
                  Goal Weight (lbs) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="goalWeight"
                  className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* BMI Calculation Animation */}
            <AnimatePresence>
              {showAnimation && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowAnimation(false)}
                >
                  <motion.div
                    className="relative w-64 h-64 flex flex-col items-center justify-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <motion.img
                      src="https://sjc.microlink.io/weOx9ohEgSwMj3MDd3-Fk5Xpa4n5PUxQ_p042RC3CYn0N8fg6JamRG6odnGXnNcZP8ugzb7Ia543D0tGlImdgQ.jpeg"
                      alt="Weightlifting"
                      className="w-full h-full object-contain"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5 },
                      }}
                    />

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-600 to-purple-700 h-1"
                      initial={{ width: 0 }}
                      animate={{
                        width: "100%",
                        transition: { duration: 3 },
                      }}
                    />

                    <motion.div
                      className="absolute top-0 left-0 right-0 text-center text-white font-bold text-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.5 },
                      }}
                    >
                      Calculating BMI...
                    </motion.div>

                    {!isCalculating && (
                      <motion.div
                        className="absolute bottom-10 left-0 right-0 text-center text-white font-bold text-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 2.5, duration: 0.5 },
                        }}
                      >
                        {bmi}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Emergency Contact Information Section */}
        <section className="border-b border-black/20 pb-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4 pb-1 border-b-2 border-pink-600 inline-block">
            Emergency Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="emergencyFirstName" className="block font-semibold text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="emergencyFirstName"
                className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="emergencyLastName" className="block font-semibold text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="emergencyLastName"
                className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                required
              />
            </div>
          </div>
        </section>

        {/* Medical Information Section */}
        <section className="border-b border-black/20 pb-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4 pb-1 border-b-2 border-pink-600 inline-block">
            Medical Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Do you have any medical conditions or allergies? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="medicalConditions"
                    value="yes"
                    onChange={() => setMedicalConditions("yes")}
                    required
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="medicalConditions" value="no" onChange={() => setMedicalConditions("no")} />
                  <span>No</span>
                </label>
              </div>
            </div>

            {medicalConditions === "yes" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2"
              >
                <label htmlFor="medicalDetails" className="block font-semibold text-gray-800">
                  If yes, please provide details
                </label>
                <textarea
                  id="medicalDetails"
                  className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600 min-h-[100px]"
                />
              </motion.div>
            )}
          </div>
        </section>

        {/* Membership Information Section */}
        <section className="border-b border-black/20 pb-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4 pb-1 border-b-2 border-pink-600 inline-block">
            Membership Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Choose Membership Type <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    value="monthly"
                    onChange={() => setMembershipType("monthly")}
                    required
                  />
                  <span>Monthly Membership</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    value="annual"
                    onChange={() => setMembershipType("annual")}
                  />
                  <span>Annual Membership</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    value="dayPass"
                    onChange={() => setMembershipType("dayPass")}
                  />
                  <span>Day Pass</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="startDate" className="block font-semibold text-gray-800">
                Preferred Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full p-3 border border-black/30 rounded-md bg-white/80 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600"
                required
              />
            </div>
          </div>
        </section>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-3 mt-6">
          <input type="checkbox" id="termsAgree" className="w-4 h-4" required />
          <label htmlFor="termsAgree" className="font-semibold text-gray-800">
            I agree to terms & conditions. <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="block w-48 mx-auto py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold text-lg rounded-md shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>

        <p className="text-center font-bold text-purple-700 text-lg uppercase tracking-wider mt-6">NEVER GIVE UP</p>
      </form>
    </div>
  )
}

