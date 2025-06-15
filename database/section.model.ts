import { model, models, Schema } from 'mongoose'

const SectionSchema = new Schema(
	{
		title: String,
		position: { type: Number },
		course: { type: Schema.Types.ObjectId, ref: 'Course' },
	},
	{ timestamps: true }
)

const Section = models.Section || model('Section', SectionSchema)
export default Section
