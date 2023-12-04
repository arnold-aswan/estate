import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fpicrequests%2Fcomments%2Fuom01i%2Fcan_someone_add_a_black_durag_to_the_default%2F&psig=AOvVaw220cBLKnP8k6aYenMWl9uW&ust=1701774681786000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCCz-7S9YIDFQAAAAAdAAAAABAe",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
