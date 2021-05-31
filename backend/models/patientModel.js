import mongoose from 'mongoose'

const patientScheme = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientId: {
      type: String,
      required: true,
      // unique: true,
    },
    patient: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    guardian: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    room: [
      {
        department: {
          type: String,
          required: true,
        },
        room: {
          type: String,
          required: true,
        },
        bed: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          default: 'Admitted',
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
    generalStatus: {
      type: String,
      default: 'Admitted',
    },
  },
  {
    timestamps: true,
  }
)

const PatientModel = mongoose.model('Patient', patientScheme)
export default PatientModel